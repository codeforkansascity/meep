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
