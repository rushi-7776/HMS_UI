from DBService import insertdata
import logging
from flask import jsonify
from oracledb import connect

def register_appointment(request):
    data = request.json
    firstname = data.get('firstName')
    lastname = data.get('lastName')
    email = data.get('email')
    phoneno = data.get('phoneNo')
    address = data.get('address')
    doctor = data.get('doctor')
    dates = data.get('dates')
    appointment_time = data.get('time')

    if firstname == '':
        return jsonify({'error': 'first name cannot be empty'}), 400

    if lastname == '':
        return jsonify({'error': 'last name cannot be empty'}), 400

    if email == '':
        return jsonify({'error': 'email cannot be empty'}), 400

    if phoneno == '':
        return jsonify({'error': 'phoneno cannot be empty'}), 400

    if address == '':
        return jsonify({'error': 'address cannot be empty'}), 400

    if doctor == '':
        return jsonify({'error': 'doctor cannot be empty'}), 400

    if dates == '':
        return jsonify({'error': 'date cannot be empty'}), 400

    if appointment_time == '':
        return jsonify({'error': 'time cannot be empty'}), 400

    if firstname and lastname and email and phoneno and address and dates:
        insertdata(firstname, lastname, email, phoneno, address, doctor, dates, appointment_time)
        return jsonify({'success': 'user data  recived'}), 200
    else:
        return jsonify({'error': 'user data not recived'}), 400

def get_appointments():
    try:
        connection = connect(user='system', password='1234', dsn="localhost:1521/orcl")
        cursor = connection.cursor()

        cursor.execute("SELECT * FROM AHOSPITAL1 ")

        columns = [col[0] for col in cursor.description]
        data = [dict(zip(columns, row)) for row in cursor.fetchall()]

        cursor.close()
        connection.close()
        return jsonify(data), 200

    except Exception as e:
        logging.error(f"Error retrieving appointments: {e}")
        return jsonify({'error': 'Error retrieving appointments'}), 500

def get_patient(id):
    try:
        connection = connect(user='system', password='1234', dsn="localhost:1521/orcl")
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM AHOSPITAL1 WHERE id = :id", (id,))
        row = cursor.fetchone()
        if row:
            columns = [col[0] for col in cursor.description]
            patient = dict(zip(columns, row))
            cursor.close()
            connection.close()
            return jsonify(patient), 200
        else:
            cursor.close()
            connection.close()
            return jsonify({'error': 'Patient not found'}), 404
    except Exception as e:
        logging.error(f"Error retrieving patient: {e}")
        return jsonify({'error': 'Error retrieving patient'}), 500

def get_today_appointments():
    try:
        connection = connect(user='system', password='1234', dsn="localhost:1521/orcl")
        cursor = connection.cursor()

        cursor.execute("SELECT ID, FIRSTNAME,LASTNAME, PHONENO,DOCTOR, APPOINTMENT_TIME FROM AHOSPITAL1 WHERE "
                       "TRUNC(TO_DATE(DATES)) = TRUNC(SYSDATE) ORDER BY ID ASC")

        columns = [col[0] for col in cursor.description]
        data = [dict(zip(columns, row)) for row in cursor.fetchall()]

        cursor.close()
        connection.close()
        return jsonify(data), 200

    except Exception as e:
        logging.error(f"Error retrieving appointments: {e}")
        return jsonify({'error': 'Error retrieving appointments'}), 500