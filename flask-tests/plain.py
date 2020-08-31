import json
import logging
from flask import Flask, Response, request, jsonify, current_app
from flask_cors import cross_origin, CORS

logging.getLogger('flask_cors').level = logging.DEBUG

app = Flask(__name__)

# CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'
# CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/')
def hello_world():
    return 'Server works'


@app.route('/api/plain_post', methods=['POST'])
@cross_origin()
def plain_post():
    msg = request.get_json().get('message', None)
    """
    json_response = json.dumps({"msg": f"Received '{msg}'"})
    resp = Response(json_response,
                    status=200,
                    mimetype='application/json')
    # resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp
    """
    return jsonify({"msg": f"Received '{msg}'"})

@app.route('/api/plain_get', methods=['GET'])
@cross_origin()
def plain_get():
    """
    json_response = json.dumps({"msg": "plain_get was called"})
    resp = Response(json_response,
                    status=200,
                    mimetype='application/json')
    # resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp
    """
    return jsonify({"msg": "plain_get was called"})
    
if __name__ == '__main__':
    app.run()

