from pymongo import MongoClient

client = MongoClient(
    "mongodb+srv://purvatagde_db_user:Manager123@cluster0.czf2xop.mongodb.net/?appName=Cluster0"
)

db = client["fitgenie_db"]

users_collection = db["users"]