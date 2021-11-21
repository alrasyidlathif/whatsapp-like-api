# pre-requisite
1. installed SQL SERVER
2. npm
3. node.js

# execute this query on SQL Server to create MESSAGES table
CREATE TABLE MESSAGES (
  id int PRIMARY KEY IDENTITY,
  message varchar(255) NOT NULL,
  from_user varchar(15) NOT NULL,
  to_user varchar(15) NOT NULL,
  date_at DATETIME NOT NULL,
  reply_on_id int NULL
);

# on CMD/terminal open project folder then run
> npm install

# in project folder create your .env file
PORT={your-api-port}
DB_USER={your-user-for-login-db}
DB_PASSWORD={your-password-for-login-db}
DB_NAME={your-db-name}
DB_HOST={your-db-host}
