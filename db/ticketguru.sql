CREATE DATABASE ticketguru;

CREATE TABLE tp_user
(
   USER_ID bigint PRIMARY KEY NOT NULL,
   EMAIL varchar(255),
   FIRST_NAME varchar(255),
   GENDER varchar(255),
   LAST_NAME varchar(255),
   PASSWORD varchar(255)
)
;
CREATE UNIQUE INDEX PRIMARY ON tp_user(USER_ID)
;
