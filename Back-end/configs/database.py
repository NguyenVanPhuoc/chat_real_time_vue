# -*- coding: utf-8 -*-
import certifi
from pymongo.mongo_client import MongoClient

client = MongoClient(
    'mongodb+srv://phuocnvnta:cntt15T1021135@cluster0.snpoq24.mongodb.net/chat_realtime',
    tlsCAFile=certifi.where()
)

try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

db = client.chat_realtime

user_collection = db["Users"]
message_collection = db["Messages"]
dialog_collection = db["Dialogs"]
call_collection = db["Calls"]
