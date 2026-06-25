from flask import Blueprint, request, jsonify
from database.db import users_collection

login = Blueprint("login", __name__)

@login.route("/login", methods=["POST"])
def login_user():

    data = request.json

    user = users_collection.find_one({
        "email": data["email"]
    })

    if user and user["password"] == data["password"]:

        return jsonify({
            "message": "Login Successful",
            "user": {
    "name": user["name"],
    "email": user["email"],
    "age": user["age"],
    "height": user["height"],
    "weight": user["weight"],
    "goal": user["goal"]
}
        })

    return jsonify({
        "message": "Invalid Credentials"
    }), 401