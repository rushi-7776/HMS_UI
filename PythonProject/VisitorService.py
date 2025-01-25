import logging
from flask import jsonify
from oracledb import connect

def add_visitor(request):
    data = request.json
    Name = data.get('Name')
    Date = data.get('Date')
    Time = data.get('Time')
    Status = data.get('Status')

    if Name == '':
        return jsonify({'error': 'Name cannot be empty'}), 400
    if Date == '':
        return jsonify({'error': 'Date cannot be empty'}), 400
    if Time == '':
        return jsonify({'error': 'Time cannot be empty'}), 400
    if Status == '':
        return jsonify({'error': 'Status cannot be empty'}), 400
    try:
        connection = connect(user='system', password='1234', dsn="localhost:1521/orcl")
        cursor = connection.cursor()

        cursor.execute("INSERT INTO Visitor (Name,Dates,Times,Status ) VALUES "
                       "(:Name, :Dates, :Times, :Status)",
                       (Name,Date,Time,Status ))

        connection.commit()
        cursor.close()
        connection.close()
        return jsonify({'message': 'Visitor registered successfully'}), 201

    except Exception as e:
        logging.error(f"Error during registration: {e}")
        return jsonify({'error': 'Error during registration'}), 500

def get_visitor():
    try:
        connection = connect(user='system', password='1234', dsn="localhost:1521/orcl")
        cursor = connection.cursor()

        cursor.execute("SELECT * FROM visitor ORDER BY id DESC")

        columns = [col[0] for col in cursor.description]
        data = [dict(zip(columns, row)) for row in cursor.fetchall()]

        cursor.close()
        connection.close()
        return jsonify(data), 200

    except Exception as e:
        logging.error(f"Error retrieving appointments: {e}")
        return jsonify({'error': 'Error retrieving appointments'}), 500