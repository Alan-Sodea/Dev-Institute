import requests
import psycopg2

# Database connection parameters
DB_NAME = 'mydb'
DB_USER = 'postgres'
DB_PASSWORD = '1234'
DB_HOST = 'localhost'

# REST Countries API URL
API_URL = 'https://restcountries.com/v3.1/all'

def fetch_random_countries(api_url, count=10):
    response = requests.get(api_url)
    response.raise_for_status()  # Raise an exception for HTTP errors
    countries = response.json()
    
    # Ensure we have enough countries in the response
    if len(countries) < count:
        raise ValueError("Not enough countries available in the API response.")
    
    # Randomly sample the countries
    import random
    return random.sample(countries, count)

def insert_countries_to_db(countries):
    conn = psycopg2.connect(dbname=DB_NAME, user=DB_USER, password=DB_PASSWORD, host=DB_HOST)
    cursor = conn.cursor()
    
    # Create table if it doesn't exist
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS Countries (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            capital VARCHAR(100),
            flag VARCHAR(255),
            subregion VARCHAR(100),
            population INTEGER
        );
    """)
    
    # Insert country data
    for country in countries:
        name = country.get('name', {}).get('common', 'Unknown')
        capital = country.get('capital', ['Unknown'])[0] if country.get('capital') else 'Unknown'
        flag = country.get('flags', {}).get('png', '')
        subregion = country.get('subregion', 'Unknown')
        population = country.get('population', 0)
        
        cursor.execute("""
            INSERT INTO Countries (name, capital, flag, subregion, population)
            VALUES (%s, %s, %s, %s, %s)
            ON CONFLICT (name) DO NOTHING;
        """, (name, capital, flag, subregion, population))
    
    conn.commit()
    cursor.close()
    conn.close()
    print("Countries data has been inserted successfully.")

def main():
    try:
        countries = fetch_random_countries(API_URL)
        insert_countries_to_db(countries)
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == '__main__':
    main()