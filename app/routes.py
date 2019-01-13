from app import app

@app.route("/meep")
def base_endpoint():
    return "You've reached the MEEP API"
