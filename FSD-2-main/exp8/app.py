from flask import Flask
# from routes.student_routes import student_bp
# from middleware.logger import register_middlewares

def create_app():
    app = Flask(__name__)

    # Register Blueprints
<<<<<<< HEAD
     app.register_blueprint(student_bp)
=======
    # app.register_blueprint(student_bp)
>>>>>>> a003afd464fd86632aded825e50923d4ec091b18

    # Register Middlewares
    # register_middlewares(app)

    return app

app = create_app()

@app.route("/")
def home():
    return {"message": "gaurav"}
