# SlackMe
SlackMe is a replication of Slack which is a platform where people can communicate with each other by using the live chat feature through channels or dms. 

[Live site](https://slackme-aa.herokuapp.com/)

### Technologies
* **Ruby on Rails** is the framework I chose for the backend development.
* **PostgreSQL** is the database management system that is used.
* **JavaScript/React/Redux** is used to create the frontend features
* **HTML/CSS** is used for the designing process

## Features

### User Authentication
Users are able to sign in, sign up, and logout. There is also a demo features that allow a user to sign in without creating an account and try out the features in SlackMe. 

**Comming Soon** 
### Channels
Logged in users will be able to either create a private or public channel. Channels is a place where they can communicate with other users inside that channel. The difference between a public channel and private channel is that a private channel cannot be searched and only those who are invited to that channel will be able to use that channel. 

#### Channel Forms
Forms were created with the modal feature. 
--gif comming soon

### Direct Messages
Logged in users will be able to message other users privately. Users are able to create dms with more than one person as well.

### Messages
Logged in users will be able to create messages that are sent in Channels or Direct Messages. Message is a unquie feature on slack. 

#### Polymorphic Table 
In order to have a more efficient database, the message table is a polymorphic that has a relationship to channels and direct messages. 
