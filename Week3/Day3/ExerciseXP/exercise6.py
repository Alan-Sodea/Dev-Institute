from datetime import datetime

def minutes_lived(birthdate_str, date_format="%Y-%m-%d"):
    birthdate = datetime.strptime(birthdate_str, date_format)
    now = datetime.now()
    time_lived = now - birthdate
    minutes = time_lived.total_seconds() // 60
    print(f"You have lived for {minutes} minutes.")

minutes_lived("1990-01-01")
