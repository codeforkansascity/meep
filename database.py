import re

import pymysql


def get_sql_template(filename):
    with open(filename, 'r') as f:
        return f.read()


def connect(db='meep'):
    return pymysql.connect(
        host='localhost',
        user='meep_dev',
        password='meep_dev',
        db=db,
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor
        )


def create_sql_command(sql_file):
    if sql_file[:8] != 'queries/':
        sql_file = 'queries/' + sql_file
    if not sql_file.endswith('.sql'):
        sql_file += '.sql'
    sql_template = get_sql_template(sql_file)
    def sql_command(database_name, *args, **kwargs):
        for arg in list(args) + list(kwargs.values()):
            if not is_safe_sql(arg):
                msg = 'Potentially malignant sql in parameter:\n{}'
                raise ValueError(msg.format(arg))
        con = connect(database_name)
        cur = con.cursor()
        # import pdb; pdb.set_trace()
        sql = sql_template.format(*args, **kwargs)
        import pdb; pdb.set_trace()
        sql = re.sub(r'(\n|\s)+', ' ', sql)
        cur.execute(sql)
        con.commit()
        return cur.fetchall()

    return sql_command


#TODO: write a function to catch potentially malignant sql in parameters
param_regex = re.compile(r"^[-_.'a-zA-Z0-9]+$")
def is_safe_sql(sql):
    return (param_regex.match(sql) is not None)


create_all_tables = create_sql_command('create_tables')
drop_all_tables = create_sql_command('drop_tables')
