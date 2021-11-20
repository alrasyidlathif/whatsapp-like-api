# pre-requisite
1. installed SQL SERVER

# execute this query on SQL Server to create MESSAGES table
CREATE TABLE MESSAGES (
  id int PRIMARY KEY IDENTITY,
  message varchar(255) NOT NULL,
  from_user varchar(15) NOT NULL,
  to_user varchar(15) NOT NULL,
  date_at DATETIME NOT NULL,
  reply_on_id int NULL
);

