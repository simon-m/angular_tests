import json
import logging
from flask import Flask, Response, request, jsonify, current_app
from flask_cors import cross_origin, CORS

logging.getLogger('flask_cors').level = logging.DEBUG

app = Flask(__name__)

CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'
# CORS(app, resources={r"/*": {"origins": "*"}})

# TODO: 
# save article
# return article and all articles

@app.route('/api/save_article', methods=['POST'])
def save_article():
#     article = request.get_json().get('article', None)
    article = request.get_json()
    if article is None:
      print("not json")
      article = request.get_data()
    print(article)
    return jsonify({"articleId": 1})
    

if __name__ == '__main__':
    app.run()



"""

@app.route('/')
def hello_world():
    return 'Server works'

@app.route('/api/plain_post', methods=['POST'])
def plain_post():
    msg = request.get_json().get('message', None)
    return jsonify({"msg": f"Received '{msg}'"})

@app.route('/api/plain_get', methods=['GET'])
def plain_get():
    return jsonify({"msg": "plain_get was called"})


@cross_origin()

json_response = json.dumps({"msg": f"Received '{msg}'"})
resp = Response(json_response,
                status=200,
                mimetype='application/json')
# resp.headers['Access-Control-Allow-Origin'] = '*'
return resp
"""

