from datetime import datetime

def display_current_date():
    current_date = datetime.now()
    print("Current date:", current_date.strftime("%Y-%m-%d %H:%M:%S"))

display_current_date()
