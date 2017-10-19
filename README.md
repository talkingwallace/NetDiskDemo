# A small sized netdisk 
### Based on ReactJS,NodeJS and MongoDB

## Features

* Lightweight -- 28.5M in total
* Extendable  -- develop your own storage website based on it
* Simple structures -- easy to modify
* Easy to deploy -- install Mongodb and Nodejs,then run it
* On Windows OS

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

Warining:To let it run successfully,make sure to change variety 'localhost',which is in file 'main.js' under
folder /public/js ,to your server's url.Also change server's url in file 'login.html',which is under folder 'view',
to make sure that login and register functions work correctly.

Warning2:If you don't get your domain name a ICP licensing,you are likely to 
be asked to shut down the server. 
Because http://www.cac.gov.cn/ is watching you. 

## Structure

### Fore-end
  ReactJS is applied to bind file functions,file icon and file id together.Make them a whole component.
 Users' request will be sent to server,after getting the response,file component written by Reactjs will
 render,change webpage's html text or insert new html text into webpage.
 ### Server
  Javascript scripts are deployed on server.Based on Express frame,the server are able to manipulate mongodb
  ,recieve files and send files,at the same time,the server will check if a request is legal,and make to
  response to users' request.
 ### MongoDB and Filespool
   Real Files are stored in 'filepool' folder,under project folder,with their name renamed by an unique id.
   By this way,we can make sharing easier.Users' informantion are placed in Mongodb,a no-sql database.Also,logical
   files tree are built in mongodb.Every user has a tree.A file will be a tree node,and has its unique id,which 
   maps to a real file in the filespool.A folder node can has a parent and childrens,while file node can't.So,by 
   reading from mongodb,the fore-end can create a interface where a user can manipulates his(hers) files like manipulating
   them in a OS's file system.
 <br>
   To have a deep understanding of its structure,please check its codes.

## TODO
* complete personal homepage part
* add filter to input,in order to prevent XSS attacks
* optimize the performance of dowloading progress bar
* modify filespool of the newdisk,make it independent to operation system.
* add customization options

## Screenshots

