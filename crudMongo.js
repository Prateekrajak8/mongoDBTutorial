//insert one
db.collection.insertOne({
    item: "foo",
    qty: 1,
    tags: ["foo", "bar"],
    size: {w: 20, h: 15, l: 40}
})


// insert many
db.collection.insertMany([
    {
        item: "too",
        qty: 2,
        tags: ["foo", "bar"],
        size: {w: 20, h: 15, l: 40}
    },
    {
        item: "goo",
        qty: 3,
        tags: ["foo", "bar"],
        size: {w: 20, h: 15, l: 40}
    },
    {
        item: "yoo",
        qty: 4,
        tags: ["foo", "bar"],
        size: {w: 20, h: 15, l: 40}
    },
    {
        item: "loo",
        qty: 5,
        tags: ["foo", "bar"],
        size: {w: 20, h: 15, l: 40}
    }
])

// Read 
//fetch all items
db.collection.find() 

//fetch all conditions
   // first argument is selector and second argument is condition
db.collection.find({qty: 5}) 
  // working like IN condition
db.collection.find({tags: {$in:["foo", "bar"]}}) 

   //And 
db.collection.find({qty: {$lt: 4}, tags: {$in:["foo", "bar"]}}) 

   //Or 
db.collection.find({$or: [{qty: {$lt: 4}}, {tags: {$in:["foo", "bar"]}}]}) 

 //find one (first document will come)
 db.collection.findOne({$or: [{qty: {$lt: 4}}, {tags: {$in:["foo", "bar"]}}]}) 

//update the collection

db.collection.updateOne(
    {qty: 4},
    {
        $set: {"item": "poo"},
        $currentDate: {lastModified:true}
    }
)

db.collection.updateMany(
    {"qty": {$lt:3}},
    {
        $set: {"item": "poo"},
        $currentDate: {lastModified:true}
    }
)

//Replace

db.collection.findOneAndReplace(
    {"qty": 3},
    {
    film: "fight club",
    gen: 'action',
    date: 1999,
    size: {w: 20, h: 15, l: 40}
    }
)

//Delete

    db.collection.deleteOne({qty: 2})
    db.collection.deleteMany({qty: 2})
    db.collection.deleteMany({qty: 2}) //will delete all documents

//Remove    
db.collection.remove({qty: 2})

//difference between delete and remove 
  //will act like same but return different values
   
    // remove will return whole document
        // DeprecationWarning: Collection.remove() is deprecated. Use deleteOne, deleteMany, findOneAndDelete, or bulkWrite.
            //{ acknowledged: true, deletedCount: 1 }

   // delete many will return only boolean value 
   
   // In summary, deleteMany() is the preferred method for removing multiple documents in MongoDB, 
//    while remove() can also be used for the same purpose, especially in older versions of MongoDB. However, remove() has been 
//    deprecated in newer versions in favor of deleteMany()


// Sort documents
db.collection.find().limit(1) // will give only first document
db.collection.find().skip(1) // will skip first document, use in pagination
db.collection.find().sort({qty: -1})  // -1 will return descending 
db.collection.find().sort({qty: 1}) // 1 will return ascending  

db.collection.find().limit(10).skip(4) 


//mongoDB atlas- cloud database for mongodb

//mongodb - operators
// https://www.mongodb.com/docs/manual/reference/operator/query/