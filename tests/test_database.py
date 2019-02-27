import os
import re

import pytest

from app import create_app
from database import connect, get_sql_template, create_sql_command


def test_database_connection():
    connection = connect()
    assert connection is not None
    cursor = connection.cursor()
    assert cursor is not None
    sql = '''
        INSERT INTO project (name, description, photo_url, website_url, year)
        VALUES ('test', 'this is a test', 'www.some0url.com', 'www.another.com', 1999);
    '''
    assert cursor.execute(sql) == 1
    sql = '''
        SELECT * FROM project;
    '''
    assert cursor.execute(sql) == 1
    record = cursor.fetchone()
    assert record['name'] == 'test'
    assert record['description'] == 'this is a test'


def test_get_sql_template():
    filepath = 'tests/practice.sql'
    sql = get_sql_template(filepath)
    assert sql == "SELECT * FROM practice;\n"


def test_create_sql_command():
    sql_tmp_1 = '''
        USE {db};
        CREATE TABLE {table} (
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(20),
            age INT
        );
        INSERT INTO {table}(name, age)
        VALUES ('Wes', 26), ('Kurt', 24), ('Tom', 22);
    '''
    sql_tmp_2 = '''
        USE {db};
        SELECT {col_1}, {col_2} FROM {table};
    '''
    sql_tmp_3 = '''
        USE {db};
        DROP TABLE IF EXISTS {table};
    '''
    with open('queries/tcommand1.sql', 'w+') as f:
        f.write(sql_tmp_1)
    with open('queries/tcommand2.sql', 'w+') as f:
        f.write(sql_tmp_2)
    with open('queries/tcommand3.sql', 'w+') as f:
        f.write(sql_tmp_3)

    command_1 = create_sql_command('tcommand1')
    command_2 = create_sql_command('tcommand2')
    command_3 = create_sql_command('tcommand3')

    for cmd in (command_1, command_2, command_3):
        cmd_type = re.search(r"class '(\w+)'", str(type(command_1))).group(1)
        assert cmd_type == 'function'

    import pdb; pdb.set_trace()

    res_1 = command_1('meep', db='meep', table='people')
    res_2 = command_2('meep', col_1='name', col_2='age', db='meep',
                      table='people')
    res_3 = command_3('meep', table='people', db='meep')


    assert set(res_2) == set([
        {'name': 'Wes', 'age': 26},
        {'name': 'Kurt', 'age': 24},
        {'name': 'Tom', 'age': 22}
    ])


    for fpath in ('queries/tcommand1.sql', 'queries/tcommand2.sql'):
        os.remove(fpath)
