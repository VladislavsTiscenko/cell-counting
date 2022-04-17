from flask import Flask, request, render_template, send_from_directory
from flask_cors import CORS, cross_origin
import numpy as np
import cv2
import math


# Define constants

IMAGE_WIDTH = 2048
IMAGE_HEIGHT = 1536
MIN_CIRCLE_RATIO = 0.6
MIN_CIRCLE_RADIUS = 8


# Instantiate Flask app, enable CORS

app = Flask(__name__,template_folder='static')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


def get_bounding_boxes(image):
    """
    Get the cell bounding box upper-left coordinates on the image

    Parameters:
        image: Image passed from cv2.imdecode

    Returns:
        box_coords: array of coordinates: [[x,y], [x,y], ...]
    """

    # Image preprocessing

    prep = cv2.bilateralFilter(image, 5, 175, 175)
    gray = cv2.cvtColor(prep, cv2.COLOR_BGR2GRAY)
    threshold = cv2.adaptiveThreshold(gray,255,cv2.ADAPTIVE_THRESH_GAUSSIAN_C,\
                cv2.THRESH_BINARY,11,2)
    gray = cv2.Canny(threshold, 5, 70, 3)
    contours, hierarchy = cv2.findContours(gray,cv2.RETR_TREE,cv2.CHAIN_APPROX_NONE)
    box_coords = []

    if not hierarchy is None:

        for i,relation in enumerate(hierarchy[0]):

            # Get hierarchical relations
            parent = relation[3]
            child = relation[2]

            # Check if there is no parent, but if there is a child
            if parent == -1 and not child == -1:

                contour = contours[i] # Find matching contour
                contourArea = cv2.contourArea(contour) # Find area of contour

                # Find area of minimum enclosing circle
                _, radius = cv2.minEnclosingCircle(contour)
                circleArea = math.pi * (radius**2)

                # Min. encl. circle size and contour shape check
                if radius > MIN_CIRCLE_RADIUS and contourArea/circleArea >= MIN_CIRCLE_RATIO:
                    x,y,_,_ = cv2.boundingRect(contour)
                    box_coords.append([x,y]) # Store coordinates of contour bounding rectangle upper left corner

    return box_coords


@app.route("/api/inference", methods=['POST'])
@cross_origin()
def inference():
    """
    Cell detection inference endpoint.
    """

    response = {}

    for file in request.files:

        # Decode image
        image = cv2.imdecode(np.fromstring(request.files[file].read(), np.uint8), cv2.IMREAD_UNCHANGED)
        
        # Get bounding box coordinates for image
        response[file] = get_bounding_boxes(image)

    return response


@app.route('/', methods=['GET'])
def root():
    """
    Static file rendering endpoint to serve the frontend.
    """

    return render_template('index.html')


if __name__ == "__main__":
    app.run()
