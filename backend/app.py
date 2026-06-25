from flask import Flask
from flask_cors import CORS
from routes.auth_routes import auth
from routes.login_routes import login
from routes.ai_routes import ai

app = Flask(__name__)
CORS(app)

app.register_blueprint(auth)
app.register_blueprint(login)
app.register_blueprint(ai)

@app.route('/')
def home():
    return "FitGenie AI Backend Running Successfully"

if __name__ == '__main__':
    app.run(debug=True)