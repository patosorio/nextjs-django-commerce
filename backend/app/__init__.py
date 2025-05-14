import os
from dotenv import load_dotenv
from flask import Flask
from flask_cors import CORS
from .api import create_api_blueprint

load_dotenv()

def create_app():
    # Initialize Flask app
    app = Flask(__name__)

    # Enable CORS for all routes
    CORS(
        app,
        resources={
            r'/*': {
                'origins': [
                    'http://localhost:3000',
                    'http://127.0.0.1:3000'
                ],
                'methods': [
                    'GET',
                    'POST',
                    'PUT',
                    'DELETE',
                    'OPTIONS'
                ],
                'allow_headers': [
                    'Content-Type',
                    'Authorization'
                ],
            },
        },
    )

    # Register blueprints
    app.register_blueprint(
        create_api_blueprint(),
        url_prefix=''
    )

    return app
