import logging
from flask import jsonify
from oracledb import connect

def add_staff(request):
    data = request.json
    name = data.get('name')
    mobile = data.get('mobile')
    date = data.get('date')
    todayDate = data.get('todayDate')
    position = data.get('position')

    if name == '':
        return jsonify({'error': 'Name cannot be empty'}), 400
    if mobile == '':
        return jsonify({'error': 'Mobile No cannot be empty'}), 400
    if date == '':
        return jsonify({'error': 'Date cannot be empty'}), 400
    if todayDate == '':
        return jsonify({'error': 'Todays Date cannot be empty'}), 400
    if position == '':
        return jsonify({'error': 'Position cannot be empty'}), 400
    try:
        connection = connect(user='system', password='1234', dsn="localhost:1521/orcl")
        cursor = connection.cursor()

        cursor.execute("INSERT INTO staff (name, mobile, dates, todaydate, position) VALUES "
                       "(:name, :mobile, TO_DATE(:dates,'yyyy-mm-dd'), TO_DATE(:todaydate,'yyyy-mm-dd'), :position)",
                       (name, mobile, date, todayDate, position ))

        connection.commit()
        cursor.close()
        connection.close()
        return jsonify({'message': 'Visitor registered successfully'}), 201

    except Exception as e:
        logging.error(f"Error during registration: {e}")
        return jsonify({'error': 'Error during registration'}), 500

def get_staff():
    try:
        connection = connect(user='system', password='1234', dsn="localhost:1521/orcl")
        cursor = connection.cursor()

        cursor.execute("SELECT ID,NAME,MOBILE,DATES,POSITION FROM staff")

        columns = [col[0] for col in cursor.description]
        data = [dict(zip(columns, row)) for row in cursor.fetchall()]

        cursor.close()
        connection.close()
        return jsonify(data), 200

    except Exception as e:
        logging.error(f"Error retrieving appointments: {e}")
        return jsonify({'error': 'Error retrieving appointments'}), 500