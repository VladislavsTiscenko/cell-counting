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
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blurred = cv2.GaussianBlur(gray, (7,7), 0)
    edged = cv2.Canny(blurred, 50, 150)

    (contours, _) = cv2.findContours(edged.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    boxes = {}

    for c in contours:
        rect = cv2.boundingRect(c)
        a = 20
        b = 40
        if rect[2] < a or rect[3] < a or rect[2] > b or rect[3] > b or rect[2] > 1.2*rect[3] or rect[3] > 1.2*rect[2] or cv2.contourArea(c) < 30:
            continue
        else:
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