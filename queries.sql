

CREATE TABLE card(
    id_card SERIAL PRIMARY KEY,
    nombre VARCHAR (100),
    descripcion VARCHAR (150),
    color VARCHAR(25),
    imagen VARCHAR (150),
    id_ilu INTEGER,
    FOREIGN KEY (id_ilu) REFERENCES ilustrator(id_ilu)
);
-- Primero Crear esta tabla
CREATE TABLE ilustrator(
    id_ilu SERIAL PRIMARY KEY,
    nombre VARCHAR (100),
    cif VARCHAR(15),
    direccion VARCHAR(150)

);