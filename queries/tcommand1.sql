
        USE {db};
        CREATE TABLE {table} (
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(20),
            age INT
        );
        INSERT INTO {table}(name, age)
        VALUES ('Wes', 26), ('Kurt', 24), ('Tom', 22);
    