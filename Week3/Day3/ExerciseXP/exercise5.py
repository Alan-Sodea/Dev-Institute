from datetime import datetime, timedelta

def time_until_january_1st():
    now = datetime.now()
    next_year = now.year + 1
    january_first = datetime(year=next_year, month=1, day=1)
    time_left = january_first - now
    days, seconds = time_left.days, time_left.seconds
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    seconds = seconds % 60
    print(f"The 1st of January is in {days} days and {hours:02}:{minutes:02}:{seconds:02} hours.")

time_until_january_1st()
