CREATE TABLE people_records (
  email VARCHAR(255) PRIMARY KEY UNIQUE,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  user_type VARCHAR(50) NOT NULL,
  user_id VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO people_records(email, first_name, last_name, user_id) VALUES('test@test.net', 'Test', 'Elek', 1)