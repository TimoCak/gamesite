--users table:
CREATE TABLE users (
    userID int NOT NULL AUTO_INCREMENT,
    userUID text NOT NULL,
    userEmail text NOT NULL,
    userPassword text NOT NULL,
    PRIMARY KEY (userID)
 );