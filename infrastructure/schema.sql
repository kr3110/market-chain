--rec id
--datetime
--suppier id???
--buyer id???
--deal sum (integer, its supposed to be cost)
--real problem took place (boolean)
--buyer raised claim (boolean)
--Supplier accepted claim (boolean)
CREATE TABLE mkt_users (
id serial PRIMARY KEY,
name VARCHAR(30) NOT NULL,
email VARCHAR(50),
password VARCHAR(80),
location point,
is_warehouse BOOLEAN,
issue_notes VARCHAR(400),
issue BOOLEAN NOT NULL,
claim_raised BOOLEAN NOT NULL,
claim_resolved BOOLEAN NOT NULL 
);

INSERT INTO mkt_users (name, email, password, location, is_warehouse, issue_notes, issue, claim_raised, claim_resolved)
VALUES ('Johnsons Market Inc', 'john@example.com', MD5('abc123'), point(14.333,21.4443), FALSE, 'This farm is not organic they mistreat their animal', TRUE, TRUE, FALSE);
