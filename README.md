# A small sized netdisk 
### Based on ReactJS,NodeJS and MongoDB

## Features

* Lightweight -- 28.5M in total
* Extendable  -- develop your own storage website based on it
* Simple structures -- easy to modify
* Easy to deploy -- install Mongodb and Nodejs,then run it

## How to run it

After you download the project:

1.Firstly download Mongodb from:https://www.mongodb.com/ 
then install it.After installing it,create a new folder,mongodb will store data 
in it.Then open Powershell(CMD is also ok),locate at the place where mongodb are 
installed in,input: mongod.exe --dbpath:"the new folder's path",and then the mongodb is launched. 
Mongodb will run on port 27017,27017 is a default value

2.Get NodeJS from:https://nodejs.org/en/ ,install it. <br>
Now you can run Javascript scripts in you computer.Locate at the project folder, 
input "node server.js",the server will run and connect to the database which  is 
running on local port 27017.The server itself will run on local port 8000. 
You can change the running port in the source file 'server.js'. 

3.Now the server is running,open Chrome and input: localhost:8000,you can visit  
the website now,Sign in and sign up! 


## Place it on Cloud Sever

It's simple to place it on a Tencent Yun Server.Get a server from: 
https://cloud.tencent.com/ Connect to the Yun server,upload the project,and 
install Mongodb,NodeJS on it.Run it on the Yun server,like runnint it on your 
computer.You will get an ip,the outer ip after buying a server,so just open 
Chrome,input "the outer ip"+"port",press enter,then you will find yourself 
having your own netdisk website. 

Warning:If you don't get your domain name a ICP licensing,you are likely to 
be asked to shut down the server. 
Because http://www.cac.gov.cn/ is watching you. 

## Structures of the netdisk


## TODO
* complete personal homepage part
* add filter to input,in order to prevent XSS attacks
* optimize the performance of dowloading progress bar
* modify filespool of the newdisk,make it independent to operation system.
* add customization options

## Screenshots

