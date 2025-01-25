import oracledb
from oracledb import connect

def insertdata(firstname, lastname, email, phoneno, address, doctor, dates, appointment_time):
    connection = None
    cursor =None
    try:
       print("insert data function called")
       username = 'system'
       password = '1234'
       dsn = "localhost:1521/orcl"

       connection = connect(user=username, password=password, dsn=dsn)
       cursor = connection.cursor()

       cursor.execute(
           "INSERT INTO AHOSPITAL1 (FIRSTNAME, LASTNAME, EMAIL, PHONENO, ADDRESS, DOCTOR, DATES, APPOINTMENT_TIME) VALUES "
           "(:firstname, :lastname, :email, :phoneno, :address, :doctor, TO_DATE(:dates, 'yyyy-mm-dd'), :appointment_time)",
           (firstname, lastname, email, phoneno, address, doctor, dates, appointment_time))

       connection.commit()

    except oracledb.DatabaseError as e:
       print(f"Database error: {e}")
       if connection:
           connection.rollback()
    finally:

      if cursor:
        cursor.close()
      if connection:
         connection.close()