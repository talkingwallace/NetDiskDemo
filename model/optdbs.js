/**
 * Created by cwj on 2017/3/27.
 */
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');
// Connection URL
var mainDB = 'mydb';
var url = 'mongodb://localhost:27017/';
var mongodb = require('mongodb');
// Use connect method to connect to the server
module.exports={
    mainDB:'mydb'
    ,
    insertData:function(dbName,collName,data,callback){
        MongoClient.connect(url+dbName,function(err,db){
            var collection = db.collection(collName);
            collection.insert(data,function(err,result){
                if(err)console.log("err");
                else callback(result);
            });
            db.close();
        });
    },
    findDocWithFilter:function(dbName,collName,Filter,callback){
        MongoClient.connect(url+dbName,function(err,db){
            var collection = db.collection(collName);
            collection.find(Filter).toArray(function(err,docs){
                if(!err){
                    callback(docs);
                }
            });
            db.close();
        });
    },
    updateDoc :function(dbName,collName,Filter,Set,callback){
        MongoClient.connect(url+dbName,function(err,db){
            var collection = db.collection(collName);
            collection.updateOne(Filter,Set,function(err,result){
                if(err){
                    console.log(err);
                }
                callback(result);
            });
            db.close();
        });
    },
    removeDoc:function(dbName,collName,Filter,callback){
        MongoClient.connect(url+dbName,function(err,db){
            var collection = db.collection(collName);
            collection.deleteOne(Filter,function(err,result){
                if(err){
                    console.log("failed to delete");
                    console.log(err);
                }
                callback(result);
            });
            db.close();
        });
    },
    createUserSpace:function(dbName){
        var url = 'mongodb://localhost:27017/'+dbName;
        MongoClient.connect(url, function(err, db) {
            assert.equal(null, err);
            createCapped(db, function() {
                db.close();
            });
        });
        var createCapped = function(db, callback) {
            db.createCollection("userInfo", { "capped": true, "size": 100000, "max": 5000},
                function(err, results) {
                    if(err)console.log(err);
                    else{
                        console.log("Collection created.");
                        callback();
                    }
                }
            );
        };
    }
};

