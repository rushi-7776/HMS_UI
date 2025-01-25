from flask import request
from flask import Flask
from flask_cors import CORS
from AppointmentService import register_appointment, get_appointments, get_patient, get_today_appointments
from AttendenceService import add_daily_staff, get_daily_staff
from EmailService import send_email
from LoginService import login, register
from StaffService import add_staff, get_staff
from VisitorService import add_visitor, get_visitor

app = Flask(__name__)

CORS(app, resources={r"/register": {"origins": "http://localhost:4200"}})
CORS(app, supports_credentials=True)

@app.route('/staff', methods=['POST'])
def add_staffs():
    return add_staff(request)

@app.route('/staff', methods=['GET'])
def get_staffs():
    return get_staff()

@app.route('/dailystaff', methods=['POST'])
def add_daily_staffs():
    return add_daily_staff(request)

@app.route('/dailystaff', methods=['GET'])
def get_daily_staffs():
    return get_daily_staff()

@app.route('/appointment', methods=['POST'])
def add_appointment():
    return register_appointment(request)

@app.route('/appointment', methods=['GET'])
def appointments():
    return get_appointments()

@app.route('/appointments', methods=['GET'])
def today_appointment():
    return get_today_appointments()

@app.route('/appointment/<int:id>', methods=['GET'])
def get_appointments_by_id(id):
    return get_patient(id)

@app.route('/visitor', methods=['POST'])
def add_visitors():
    return add_visitor(request)

@app.route('/visitor', methods=['GET'])
def get_visitors():
    return get_visitor()

@app.route('/register', methods=['POST'])
def handle_register ():
    return register()

@app.route('/login', methods=['POST'])
def handle_login():
    return login()

@app.route('/send_emails', methods=['GET', 'POST'])
def send_emails():
    return send_email()

if __name__ == '__main__':
    app.run(debug=True)