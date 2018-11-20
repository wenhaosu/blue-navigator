import csv, sqlite3, sys, os,json

def main():

    if len(sys.argv) != 2 and len(sys.argv) != 4:
        print ("invalid argument number")
        exit(1)

    command = sys.argv[1]

    if command == "create" and len(sys.argv) == 4:

        create(sys.argv[2], sys.argv[3])

    elif command == "destroy":
        destroy()

    elif command == "reset":
        reset()

    elif command == "print":
        get_posts()
        
    else:
        print ("invalid argument option, must choose from create, destroy, or reset")
        exit(1)

def create(file_name1, file_name2):
    database = "blue_navigator_db.sqlite3"
 
    sql_create_projects_table = """ CREATE TABLE buildings(
                                      b_id INTEGER PRIMARY KEY,
                                      bname VARCHAR(50) NOT NULL,
                                      abbr VARCHAR(50)
                                    );"""
 
    sql_create_tasks_table = """CREATE TABLE locations(
                                  l_id INTEGER PRIMARY KEY,
                                  b_id INTEGER NOT NULL,
                                  lname VARCHAR(200) NOT NULL,
                                  x_loc INTEGER NOT NULL,
                                  y_loc INTEGER NOT NULL,
                                  floor_num INTEGER NOT NULL,
                                  ltype INTEGER NOT NULL,
                                  FOREIGN KEY(b_id) REFERENCES buildings(b_id) ON DELETE CASCADE
                                );"""
 
    # create a database connection
    conn = create_connection(database)
    if conn is not None:
        # create projects table
        create_table(conn, sql_create_projects_table)
        # create tasks table
        create_table(conn, sql_create_tasks_table)
        # insert data into both table
        insert_data(conn, file_name1, file_name2)
    else:
        print("Error! cannot create the database connection.")

    conn.close()

def destroy():
    os.remove("blue_navigator_db.sqlite3")
    os.remove("buildings.json")
    os.remove("locations.json")
    print ("db removed")

def reset():
    
    destroy()
    create()
    


def create_connection(db_file):
    """ create a database connection to the SQLite database
        specified by db_file
    :param db_file: database file
    :return: Connection object or None
    """
    try:
        conn = sqlite3.connect(db_file)
        return conn
    except Error as e:
        print(e)
 
    return None

def create_table(conn, create_table_sql):
    """ create a table from the create_table_sql statement
    :param conn: Connection object
    :param create_table_sql: a CREATE TABLE statement
    :return:
    """
    try:
        cur = conn.cursor()
        cur.execute(create_table_sql)
    except Error as e:
        print(e)

def insert_data(conn, file_name1, file_name2):
    cur = conn.cursor()
    jsonfile1 = open('buildings.json', 'w')
    jsonfile2 = open('locations.json', 'w')

    with open(file_name1,'r') as fin1: # `with` statement available in 2.5+
        # csv.DictReader uses first line in file for column headings by default
        dr1 = csv.DictReader(fin1) # comma is default delimiter
        to_db1 = [(i['bname'], i['abbr']) for i in dr1]

    cur.executemany("INSERT INTO buildings (bname, abbr) VALUES (?, ?);", to_db1)

    with open(file_name1,'r') as fin1: # `with` statement available in 2.5+
        # csv.DictReader uses first line in file for column headings by default
        dr1 = csv.DictReader(fin1) # comma is default delimiter
        jsonfile1.write('{\n')
        jsonfile1.write('  \"buildings\": [\n')
        for row in dr1:
            jsonfile1.write('    ')
            json.dump(row, jsonfile1)
            jsonfile1.write(',\n')
        jsonfile1.write('  ]\n')
        jsonfile1.write('}')
    

    

    with open(file_name2,'r') as fin2: # `with` statement available in 2.5+
        # csv.DictReader uses first line in file for column headings by default
        dr2 = csv.DictReader(fin2) # comma is default delimiter
        to_db2 = [(int(i['b_id']), str(i['lname']), int(i['x_loc']), int(i['y_loc']), int(i['floor_num']), str(i['ltype'])) for i in dr2]       

    cur.executemany("INSERT INTO locations (b_id, lname, x_loc, y_loc, floor_num, ltype) VALUES (?, ?, ?, ?, ?, ?);", to_db2)

    with open(file_name2,'r') as fin2: # `with` statement available in 2.5+
        # csv.DictReader uses first line in file for column headings by default
        dr2 = csv.DictReader(fin2) # comma is default delimiter

        jsonfile2.write('{\n')
        jsonfile2.write('  \"rooms\": [\n')
        for row in dr2:
            jsonfile2.write('    ')
            json.dump(row, jsonfile2)
            jsonfile2.write(',\n')

        jsonfile2.write('  ]\n')
        jsonfile2.write('}')
    
    conn.commit()

def get_posts():
    database = "blue_navigator_db.sqlite3"
    conn = create_connection(database)
    cur = conn.cursor()
    cur.execute("SELECT * FROM buildings")
    print(cur.fetchall())
    cur.execute("SELECT * FROM locations")
    print(cur.fetchall())

    conn.commit()
    conn.close()


if __name__ == '__main__':
    main()
