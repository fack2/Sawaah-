    BEGIN;

    INSERT INTO users
    (user_name, email, password, first_name,last_name, card_number, experation_date, security_code)
    VALUES
    ('saja','saja@gmail.com','123','saja','lahaleeh','2710','22/10/2020','27101997'),
    ('rawan','rawan@gmail.com','123','rawan','rajabi','2711','22/9/2020','27101995');

    INSERT INTO destination
    (country, date, price, user_id)
    VALUES
    ('Barcelona','28/11/2019','1000', '1'),
    ('Venice','8/12/2019', '2000', '2');

    INSERT INTO tickets
    (departure_time, arraival_time, destination_id)
    VALUES
    ('Mon 4:45 PM','Tue 11:15 AM', '1'),
    ('Sat 6:45 AM','Sat 12:15 PM', '1'),
    ('Wed 1:15 AM','Wed 8::00 PM', '2'),
    ('Thur 2:00 PM','Fri 6:40 AM', '2');
    COMMIT;