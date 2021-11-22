# pre-requisite
1. installed SQL SERVER
2. installed npm
3. installed node.js


# installment
1. clone this project from repo

2. on CMD/terminal open project folder then run
> npm install

3. in project folder create your .env file
PORT={your-api-port}
DB_USER={your-user-for-login-db}
DB_PASSWORD={your-password-for-login-db}
DB_NAME={your-db-name}
DB_HOST={your-db-host}

4. execute this query on SQL Server to create MESSAGES table
CREATE TABLE MESSAGES (
  id int PRIMARY KEY IDENTITY,
  message varchar(255) NOT NULL,
  from_user varchar(15) NOT NULL,
  to_user varchar(15) NOT NULL,
  date_at DATETIME NOT NULL,
  reply_on_id int NULL
);

5. to run unit testing, in project folder run
> npm test

6. to run the api, in project folder run
> npm start


# documentation
- to send a message from SENDER to RECEIVER
method: POST
url: http://localhost:{PORT}/api/v1/messages/{SENDER}/to/{RECEIVER}
body (json): {"message":"YOUR MESSAGE"}

- to list all messages between {SENDER} and {RECEIVER}
method: GET
url: http://localhost:{PORT}/api/v1/messages/{SENDER}/and/{RECEIVER}

- to send a message from SENDER to RECEIVER (as a reply of a message)
method: POST
url: http://localhost:{PORT}/api/v1/messages/{SENDER}/to/{RECEIVER}
body (json): {"message":"YOUR MESSAGE","reply_on_id":MSG-ID<integer>}

- to list all messages that involve {USER}
method: GET
url: http://localhost:{PORT}/api/v1/messages/{USER}
