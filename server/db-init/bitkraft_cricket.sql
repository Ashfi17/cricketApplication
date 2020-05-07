drop database if exists bitkraft_cricket;
create database bitkraft_cricket;
/* CREATING TABLES */
create table match
(
    match_id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
    match_type varchar(255),
    match_date date,
    innings_one_team int,
    CONSTRAINT fk_team_one FOREIGN KEY (innings_one_team) REFERENCES team (team_id),
    innings_two_team int,
    CONSTRAINT fk_team_two FOREIGN KEY (innings_two_team) REFERENCES team (team_id),
    outcome varchar(255),
    player_of_the_match int,
    CONSTRAINT fk_match_player FOREIGN KEY (player_of_the_match) REFERENCES player (player_id),
    match_winner int,
    match_loser int,
    summary varchar(8000),
    venue_id int,
    CONSTRAINT fk_venue_id FOREIGN KEY (venue_id) REFERENCES venue (venue_id)
);

 create table player
    (
        player_id serial PRIMARY KEY NOT NULL,
        player_name varchar(255),
        player_gender varchar(100),
        player_dob date,
        player_role varchar(255),
        player_country varchar(255)
    );

     create table team
    (
        team_id serial PRIMARY KEY NOT NULL,
        team_name varchar(255)
    );

     create table venue
    (
        venue_id serial PRIMARY KEY NOT NULL,
        venue_name varchar(255),
        venue_city varchar(255)
    );

    /* INSERTING SOME DATA IN PLAYER TABLE */

INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('Virat Kohli','Male','1988-11-05','Batsman','India');
INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('Rohit Sharma','Male','1987-04-30','Batsman','India');
INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('Hardik Pandya','Male','1993-10-1','All rounder','India');
INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('Ravindra Jadeja','Male','1988-12-05','All rounder','India');
INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('MS Dhoni','Male','1981-07-07','Wicket keeper-Batsman','India');
INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('Mohammed Shami','Male','1990-09-03','Bowler','India');
INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('Yuzvendra Chahal','Male','1990-07-23','Bowler','India');

INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('Aaron Finch','Male','1986-11-17','Batsman','Australia');
INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('Steven Smith','Male','1989-06-02','Batsman','Australia');
INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('Glenn Maxwell','Male','1988-10-14','All rounder','Australia');
INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('David Warner','Male','1988-10-26','Batsman','Australia');
INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('Alex Carey','Male','1991-08-27','Wicket keeper-Batsman','Australia');
INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('Mitchell Starc','Male','1990-01-30','Bowler','Australia');
INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('Pat Cummins','Male','1993-05-08','Bowler','Australia');

INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('Fakhar Zaman','Male','1990-04-10','Batsman','Pakistan');
INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('Babar Azam','Male','1994-10-15','Batsman','Pakistan');
INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('Mohammad Hafeez','Male','1980-10-17','All rounder','Pakistan');
INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('Sarfaraz Ahmed','Male','1987-05-22','Wicket keeper-Batsman','Pakistan');
INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('Shoaib Malik','Male','1982-02-01','All rounder','Pakistan');
INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('Wahab Riaz','Male','1985-06-28','Bowler','Pakistan');
INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('Hasan Ali','Male','1994-07-02','Bowler','Pakistan');

INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('Eoin Morgan','Male','1986-09-10','Batsman','England');
INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('Joe Root','Male','1990-12-30','Batsman','England');
INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('Moeen Ali','Male','1987-06-18','All rounder','England');
INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('Jos Buttler','Male','1990-09-08','Wicket keeper-Batsman','England');
INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('Ben Stokes','Male','1991-06-04','All rounder','England');
INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('Liam Plunkett','Male','1985-04-06','Bowler','England');
INSERT INTO  player(player_name,player_gender,player_dob,player_role,player_country) VALUES ('Mark Wood','Male','1990-01-11','Bowler','England');

/* INSERTING TEAM DATA in TEAM TABLE*/

INSERT INTO team(team_name) VALUES ('India');
INSERT INTO team(team_name) VALUES ('Australia');
INSERT INTO team(team_name) VALUES ('Pakistan');
INSERT INTO team(team_name) VALUES ('England');

/* INSERTING  DATA in VENUE TABLE*/

INSERT INTO venue(venue_name,venue_city) VALUES ('Eden Gardens','Kolkata,India');
INSERT INTO venue(venue_name,venue_city) VALUES ('Lords Cricket Ground','St Johns Wood, London')
