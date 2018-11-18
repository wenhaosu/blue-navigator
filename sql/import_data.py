import csv, sqlite3, sys

def main():

	if (len(sys.argv) != 2 and len(sys.argv) != 3)
		print "invalid argument number"
		exit(1)

	command = sys.argv[1]

	if (command == "create" and len(sys.argv) == 3)
		create(sys.argv[2])

	else if (command == "destroy")
		destroy()

	else if (command == "reset")
		reset()
	else
		print "invalid argument option, must choose from create, destroy, or reset"
		exit(1)

def create(file_name):
    database = "var/blue_nevigator_db.sqlite3"
 
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
								  FOREIGN KEY(b_id) REFERENCE buildings(b_id) ON DELETE CASCADE
								);"""
 
    # create a database connection
    conn = create_connection(database)
    if conn is not None:
        # create projects table
        create_table(conn, sql_create_projects_table)
        # create tasks table
        create_table(conn, sql_create_tasks_table)
        # insert data into both table
        insert_data(conn, file_name)
    else:
        print("Error! cannot create the database connection.")

   	conn.close()

def destroy()
	database = "var/blue_nevigator_db.sqlite3"
	conn = create_connection(database)
	cur = conn.cursor()
	cur.execute("DROP TABLE locations")
	cur.execute("DROP TABLE buildings")

	cur.commit()
	cur.close()

def reset()
	
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

def insert_data(conn, file_name):
	cur = conn.cursor()

	with open(file_name,'rb') as fin: # `with` statement available in 2.5+
	    # csv.DictReader uses first line in file for column headings by default
	    dr = csv.DictReader(fin) # comma is default delimiter
	    to_db = [(i['b_id'], i['lname'], i['x_loc'], i['y_loc'], i['floor_num'], i['ltype']) for i in dr]

	cur.executemany("INSERT INTO locations (b_id, lname, x_loc, y_loc, floor_num, ltype) VALUES (?, ?, ?, ?, ?, ?);", to_db)
	conn.commit()



if __name__ == '__main__':
    main()
