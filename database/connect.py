import pymysql


def connect():
    return pymysql.connect(
        host='localhost',
        user='meep_dev',
        password='meep_dev',
        db='meep',
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor
        )


class Field:
    def __init__(name, datatype, options):
        self.name = name
        self.datatype = datatype
        self.options = options
    


def create_table(cnxn, table_name, fields, pk, fks):
    field_declarations = [f"{k} {v} {options[k]}" for (k, v) in fields.items()]
    fields_sql = f"({', '.join(field_declarations)})"
    sql = (
        f"CREATE TABLE IF NOT EXISTS {table_name} "
        f"{fields_sql}"
    )
    with cnxn.cursor() as cur:
        CREATE TABLE IF NOT EXISTS tasks (
    task_id INT AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    start_date DATE,
    due_date DATE,
    status TINYINT NOT NULL,
    priority TINYINT NOT NULL,
    description TEXT,
    PRIMARY KEY (task_id)
    )

def drop_table():
    pass


if __name__ == '__main__':
    cnxn = connect()
    print(cnxn)
