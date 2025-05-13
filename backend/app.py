from flask import Flask
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

@app.route('/')
def health_check():
    return {
        'status': 'healthy',
        'service': 'flask-backend',
        'version': '1.0.0'
    }

@app.route('/api/test')
def test():
    return {'message': 'Flask backend is working!'}

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True) 