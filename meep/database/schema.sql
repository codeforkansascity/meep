CREATE TABLE alembic_version (
	version_num VARCHAR(32) NOT NULL, 
	CONSTRAINT alembic_version_pkc PRIMARY KEY (version_num)
);
CREATE TABLE fuel_type (
	id INTEGER NOT NULL, 
	fuel VARCHAR(50), 
	PRIMARY KEY (id)
);
CREATE TABLE owner (
	id INTEGER NOT NULL, 
	name VARCHAR(30) NOT NULL, 
	summary VARCHAR(1000), 
	PRIMARY KEY (id)
);
CREATE TABLE project (
	id INTEGER NOT NULL, 
	name VARCHAR(120) NOT NULL, 
	start_date DATE, 
	duration DATETIME, 
	project_type VARCHAR(20), 
	summary VARCHAR(1000), 
	PRIMARY KEY (id), 
	UNIQUE (name)
);
CREATE TABLE project_owner (
	project_id INTEGER NOT NULL, 
	owner_id INTEGER NOT NULL, 
	PRIMARY KEY (project_id, owner_id), 
	FOREIGN KEY(owner_id) REFERENCES owner (id), 
	FOREIGN KEY(project_id) REFERENCES project (id)
);
CREATE TABLE site (
	id INTEGER NOT NULL, 
	"GHG_reduced" FLOAT, 
	"GGE_reduced" FLOAT, 
	project_id INTEGER, 
	PRIMARY KEY (id), 
	FOREIGN KEY(project_id) REFERENCES project (id)
);
CREATE TABLE address (
	id INTEGER NOT NULL, 
	city VARCHAR(50), 
	state VARCHAR(50), 
	zip INTEGER, 
	owner_id INTEGER, 
	site_id INTEGER, 
	PRIMARY KEY (id), 
	FOREIGN KEY(owner_id) REFERENCES owner (id), 
	FOREIGN KEY(site_id) REFERENCES site (id)
);
CREATE TABLE area_of_effect (
	id INTEGER NOT NULL, 
	site_id INTEGER NOT NULL, 
	address_id INTEGER, 
	fuel_type_id INTEGER, 
	PRIMARY KEY (id), 
	FOREIGN KEY(address_id) REFERENCES address (id), 
	FOREIGN KEY(fuel_type_id) REFERENCES fuel_type (id), 
	FOREIGN KEY(site_id) REFERENCES site (id)
);
CREATE TABLE coordinate (
	id INTEGER NOT NULL, 
	lat FLOAT, 
	long FLOAT, 
	address_id INTEGER, 
	PRIMARY KEY (id), 
	FOREIGN KEY(address_id) REFERENCES address (id)
);
CREATE TABLE line (
	id INTEGER NOT NULL, 
	area_of_effect_id INTEGER NOT NULL, 
	end_location_id INTEGER NOT NULL, 
	PRIMARY KEY (id), 
	FOREIGN KEY(area_of_effect_id) REFERENCES area_of_effect (id), 
	FOREIGN KEY(end_location_id) REFERENCES address (id)
);
CREATE TABLE radius (
	id INTEGER NOT NULL, 
	area_of_effect_id INTEGER NOT NULL, 
	radius FLOAT, 
	PRIMARY KEY (id), 
	FOREIGN KEY(area_of_effect_id) REFERENCES area_of_effect (id)
);
