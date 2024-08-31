import psycopg2

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        conn = psycopg2.connect("dbname=menu_db user=your_username password=your_password")
        cursor = conn.cursor()
        cursor.execute(
            "SELECT item_name, item_price FROM Menu_Items WHERE item_name = %s",
            (name,)
        )
        result = cursor.fetchone()
        cursor.close()
        conn.close()
        if result:
            return MenuItem(result[0], result[1])
        return None

    @classmethod
    def all_items(cls):
        conn = psycopg2.connect("dbname=menu_db user=your_username password=your_password")
        cursor = conn.cursor()
        cursor.execute("SELECT item_name, item_price FROM Menu_Items")
        results = cursor.fetchall()
        cursor.close()
        conn.close()
        return [MenuItem(row[0], row[1]) for row in results]