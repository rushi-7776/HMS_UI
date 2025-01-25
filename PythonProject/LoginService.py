import logging
from flask import request, jsonify
from oracledb import connect
from werkzeug.security import generate_password_hash,check_password_hash

def register():
    try:
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')

        hashed_password = generate_password_hash(password)

        connection = connect(user='system', password='1234', dsn="localhost:1521/orcl")
        cursor = connection.cursor()

        cursor.execute(
            "INSERT INTO user1 (username, password) VALUES (:username, :password)",
            {'username': username, 'password': hashed_password}
        )

        connection.commit()

        cursor.close()
        connection.close()

        return jsonify({'message': 'User registered successfully'}), 201

    except Exception as e:
        logging.error(f"Error during registration: {e}")
        return jsonify({'error': 'Error during registration'}), 500

def login():
    try:
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')

        connection = connect(user='system', password='1234', dsn="localhost:1521/orcl")
        cursor = connection.cursor()

        cursor.execute("SELECT username, password FROM user1 WHERE username = :username", (username,))

        user1 = cursor.fetchone()

        if user1 is None:
            cursor.close()
            connection.close()
            return jsonify({'error': 'User not found'}), 404

        stored_password = user1[1]
        if not check_password_hash(stored_password, password):
            cursor.close()
            connection.close()
            return jsonify({'error': 'Invalid password'}), 401

        cursor.close()
        connection.close()

        return jsonify({'message': 'Login successful'}), 200

    except Exception as e:
        logging.error(f"Error during login: {e}")
        return jsonify({'error': 'Error during login'}), 500