import logging
from flask import jsonify
from oracledb import connect

def add_daily_staff(request):
    data = request.json
    id = data.get('id')
    check_in = data.get('check_in')

    if id == '':
        return jsonify({'error': 'Name cannot be empty'}), 400
    if check_in == '':
        return jsonify({'error': 'Mobile No cannot be empty'}), 400

    try:
        connection = connect(user='system', password='1234', dsn="localhost:1521/orcl")
        cursor = connection.cursor()

        cursor.execute("INSERT INTO staff2 (id, check_in) VALUES "
                       "(:id, TO_DATE(:check_in,'yyyy-mm-dd'))",
                       (id, check_in))

        connection.commit()
        cursor.close()
        connection.close()
        return jsonify({'message': 'Visitor registered successfully'}), 201

    except Exception as e:
        logging.error(f"Error during registration: {e}")
        return jsonify({'error': 'Error during registration'}), 500

def get_daily_staff():
    try:
        connection = connect(user='system', password='1234', dsn="localhost:1521/orcl")
        cursor = connection.cursor()

        cursor.execute("SELECT s.ID, s.NAME, s.MOBILE, s.POSITION, s2.CHECK_IN FROM staff s JOIN staff2 s2 ON s.ID = s2.ID "
                       "WHERE TRUNC(s2.CHECK_IN) = TRUNC(SYSDATE) ORDER BY s.ID ASC")

        columns = [col[0] for col in cursor.description]
        data = [dict(zip(columns, row)) for row in cursor.fetchall()]

        cursor.close()
        connection.close()
        return jsonify(data), 200

    except Exception as e:
        logging.error(f"Error retrieving appointments: {e}")
        return jsonify({'error': 'Error retrieving appointments'}), 500