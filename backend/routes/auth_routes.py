from flask import Blueprint, request, jsonify
from database.db import users_collection

auth = Blueprint('auth', __name__)

@auth.route('/register', methods=['POST'])
def register():

    data = request.json

    users_collection.insert_one({
        "name": data['name'],
        "email": data['email'],
        "password": data['password'],
        "age": data['age'],
        "height": data['height'],
        "weight": data['weight'],
        "goal": data['goal']
    })

    return jsonify({
        "message": "User Registered Successfully"
    })