# Blueprint file for the API routes

from flask import Blueprint, jsonify

def create_api_blueprint():
    api_bp = Blueprint('api', __name__)

    @api_bp.route('/')
    def health_check():
        return jsonify(
            {
                'status': 'healthy',
                'service': 'flask-backend',
                'version': '1.0.0',
            }
        )

    @api_bp.route('/api/test', methods=['GET'])
    def test():
        return jsonify(
            {'message': 'Hello from Flask!'},
        )

    return api_bp
