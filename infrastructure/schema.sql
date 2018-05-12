--rec id
--datetime
--suppier id???
--buyer id???
--deal sum (integer, its supposed to be cost)
--real problem took place (boolean)
--buyer raised claim (boolean)
--Supplier accepted claim (boolean)
CREATE TABLE mktchain (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
datetime VARCHAR(30) NOT NULL,
supplier_id VARCHAR(50),
buyer_id VARCHAR(80),
deal_sum VARCHAR(80),
real_problem_took_place VARCHAR(80),
buyer_raised_claim VARCHAR(80),
supplier_accepted_claim VARCHAR(80) 
);