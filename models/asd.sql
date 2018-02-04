CREATE TABLE IF NOT EXISTS firmi (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firma VARCHAR(30) NOT NULL
);
INSERT INTO firmi(firma) VALUES 
  ('Actavis'),
  ('Egis'),
  ('Novartis'),
  ('Boehringer'),
  ('Krka'),
  ('Zentiva'),
  ('Teva'),
  ('Berlin'),
  ('Gedeon'),
  ('Astra'),
  ('4f'),
  ('Stada');
------------------------------------------------------
CREATE TABLE IF NOT EXISTS generici (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  generik VARCHAR(30) NOT NULL,
  drug_id INT NOT NULL,
  firma_id INT NOT NULL,
  FOREIGN KEY(drug_id) REFERENCES arb(id),
  FOREIGN KEY(firma_id) REFERENCES firmi(id)
);
INSERT INTO generici(generik, drug_id, firma_id) VALUES 
  ('Valtensin',1 , 1),
  ('Lorista', 3,   5),
  ('Lozap', 3,     6),
  ('Rasoltan', 3,  1),
  ('Diovan',1 ,    3),
  ('Atacand', 4,   10),
  ('Carzap', 4,    6),
  ('Repido', 4,    12),
  ('Sarteg',1 ,    2),
  ('Olmesta',5 ,   7),
  ('Tensar', 5,    8),
  ('Tespadan',5 ,  8),
  ('Micardis', 2,  4),
  ('Irbesso', 6,   11),
  ('Irbec', 6,     13),  
  ('Irprezide', 6, 1),
  ('Tolura', 2,    5),
  ('Twynsta', 2,   4);
---------------------------------------------------------------
CREATE TABLE IF NOT EXISTS arb (
  id INT AUTO_INCREMENT PRIMARY KEY,
  inn VARCHAR(30) NOT NULL,
  dose VARCHAR(30) NOT NULL
);
INSERT INTO arb
  (inn, dose) VALUES 
  ('valsartan', '160mg'),
  ('telmisartan', '80mg'),
  ('losartan', '50mg'),
  ('candesartan', '8mg'),
  ('olmesartan', '20mg'),
  ('irbesartan', '150mg');
------------------------------------------------------
USE boring_app;
SELECT generici.id, generik, firma, inn, dose
FROM generici
INNER JOIN firmi ON generici.firma_id = firmi.id
INNER JOIN arb   ON generici.drug_id  = arb.id;