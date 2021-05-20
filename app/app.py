from flask import Flask, request, render_template, send_from_directory
from flask_cors import CORS, cross_origin
import numpy as np
import json
import cv2

app = Flask(__name__, static_url_path='/static')
app._static_folder = 'static/'
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

nx = 4
ny = 4
width = 2048
height = 1536

def getBoundingBoxes(image):
    prep = cv2.bilateralFilter(image, 5, 175, 175)
    gray = cv2.cvtColor(prep, cv2.COLOR_BGR2GRAY)
    threshold = cv2.adaptiveThreshold(gray,255,cv2.ADAPTIVE_THRESH_GAUSSIAN_C,\
                cv2.THRESH_BINARY,11,2)
    gray = cv2.Canny(threshold, 5, 70, 3)
    contours, hierarchy = cv2.findContours(gray,cv2.RETR_TREE,cv2.CHAIN_APPROX_NONE)
    contour_list = []
    boxes = {}

    if not hierarchy is None:

        for i,relation in enumerate(hierarchy[0]):
            parent = relation[3]
            child = relation[2]
            if parent == -1 and not child == -1:

                contour = contours[i]
                contourArea = cv2.contourArea(contour)

                (x,y),radius = cv2.minEnclosingCircle(contour)
                center = (int(x),int(y))
                circleArea = math.pi * (radius**2)

                if contourArea > math.pi * (8**2) and contourArea/circleArea >= 0.6:
                    rect = cv2.boundingRect(contour)
                    x,y,_,_ = rect
                    boxes[(x,y)] = rect

    return boxes

def checkArea(x, y):
    aw = width//nx
    ah = height//ny
    for i in range(ny*nx):
        ix = i%nx
        iy = i//nx
        if ix*aw <= x and (ix+1)*aw > x and iy*ah <= y and (iy+1)*ah > y:
            return i

def processImage(img):

    boxes = getBoundingBoxes(img)
    areas = np.full(shape=nx*ny, fill_value=0)
    
    for _,(x,y,_,_) in boxes.items():
        areas[checkArea(x,y)] += 1

    return areas.tolist()

@app.route("/api/inference", methods=['POST'])
@cross_origin()
def home():
    response = {}
    for file in request.files:
        img = cv2.imdecode(np.fromstring(request.files[file].read(), np.uint8), cv2.IMREAD_UNCHANGED)
        response[file] = processImage(img)
    return response

@app.route('/', methods=['GET'])
def root():
    return render_template('index.html')

if __name__=="__main__":
    app.run()