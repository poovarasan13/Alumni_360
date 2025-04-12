const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://admin:admin123@cluster0.3dl4ldw.mongodb.net/<your-db-name>?retryWrites=true&w=majority"; // Replace with your Atlas connection string
const oldDbName = "<your-db-name>";
const newDbName = "testDB";

async function renameDatabase() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const oldDb = client.db(oldDbName);
    const newDb = client.db(newDbName);

    const collections = await oldDb.listCollections().toArray();

    for (const { name: collectionName } of collections) {
      const oldCollection = oldDb.collection(collectionName);
      const newCollection = newDb.collection(collectionName);

      const docs = await oldCollection.find().toArray();
      if (docs.length > 0) {
        await newCollection.insertMany(docs);
        console.log(`Copied collection: ${collectionName}`);
      }
    }

    console.log("✅ Database copy complete. Please verify before deleting the old database.");
  } catch (err) {
    console.error("❌ Error during database copy:", err);
  } finally {
    await client.close();
  }
}

renameDatabase();
