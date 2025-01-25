import smtplib
from email.mime.text import MIMEText

SMTP_SERVER = 'smtp.gmail.com'
SMTP_PORT = 587
EMAIL_USER = 'hmsservicehelpdesk@gmail.com'
EMAIL_PASS = "qphoyxtlthqrvqsq"

def send_email():
    try:
        recipients = ["gaurav.solankar7@gmail.com","rushikeshgovekar3@gmail.com","solankar.gaurav.16@gmail.com"]
        firstname = "Sir/Madam"
        subject = "Appointment Confirmation"
        body = f"Hello {firstname},\n\nYour appointment has been successfully scheduled.\n\nThank you!"

        for recipient in recipients:
            msg = MIMEText(body)
            msg['Subject'] = subject
            msg['From'] = EMAIL_USER
            msg['To'] = recipient

        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(EMAIL_USER, EMAIL_PASS)

        server.sendmail(EMAIL_USER, recipients, msg.as_string())
        server.quit()
        print("Email sent successfully!")

    except Exception as e:
        print(f"Failed to send email: {e}")
    return {"message": "Emails sent successfully"}, 200