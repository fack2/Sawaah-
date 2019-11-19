    BEGIN;

    INSERT INTO users 
    (user_name,email,password,first_name,last_name,card_number,experation_date,security_code) 
    VALUES 
    ('saja','saja@gmail.com','123','saja','lahaleeh','2710','22/10/2020','27101997'),
    ('rawan','rawan@gmail.com','123','rawan','rajabi','2711','22/9/2020','27101995');

    INSERT INTO destenation 
    (country,date) 
    VALUES 
    ('Barcelona','28/11/2019'),
    ('Venice','8/12/2019');

    INSERT INTO tickets 
    (departure_time,arraival_time) 
    VALUES 
    ('4:45 PM','11:15 AM'),
    ('1:15 AM','8::00 PM'),
    ('6:45 AM','12:15 PM'),
    ('2:00 PM','6:40 AM');
    COMMIT;