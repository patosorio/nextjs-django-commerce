import firebase_admin
from firebase_admin import credentials, auth

def init_firebase():
    cred = credentials.Certificate('../firebase/firebase-config.json')
    firebase_admin.initialize_app(cred)
