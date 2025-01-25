import oracledb
from flask import jsonify
from oracledb import connect

def get_hospitals():

    print("insert data function called")
    username = 'system'
    password = '1234'
    dsn = "localhost:1521/orcl"

    connection = connect(user=username, password=password, dsn=dsn)
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM AHOSPITAL")


    columns = [col[0] for col in cursor.description]
    data = [dict(zip(columns, row)) for row in cursor.fetchall()]

    cursor.close()
    connection.close()
    return jsonify(data), 200