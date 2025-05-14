from flask import Blueprint, jsonify
from utils.decorators import token_required

firebase_auth_bp = Blueprint('firebase_auth', __name__)

@firebase_auth_bp.route('/protected', methods=['GET'])
@token_required
def protected_route():
    return jsonify({'message': 'This is a protected route.'})