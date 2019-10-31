var redis = require('redis')
var client = redis.createClient(); //By default, redis.createClient()
// will use 127.0.0.1 and 6379 as the hostname and port respectively. 
//If you have a different host/port you can supply them as following:
//var client = redis.createClient(port, host);
client.on('connect', function() {
    console.log('Redis is ready')
});

client.on('error', function() {
    console.log("Error in Redis")
})

// client.auth('password', function(err,reply) {
//     console.log(reply)
// })

// client.set("name", "abc", function(err,reply) {
//     console.log('Error', err)
//     console.log('Reply', reply)
// })

// client.get("name", function(err,reply) {
//     console.log(err)
//     console.log(reply)
// })

// client.hmset("user", "name", "nandini", "age", 10, "place", "Mangalore", "DOB", "March 11", function(err,reply) {
//     console.log(err)
//     console.log(reply)
// })

// client.hgetall("user", function(err,reply) {
//     console.log(err)
//     console.log(reply)
// })

  client.hmset("todo","id",Date.now(),"text","","complete",false,
"note","","noteValue","","dueDate",false,"updateDate","","saveDate",false, function(err,reply) {
  if(err)  console.log('Error while adding', err)
  console.log(reply)
})

// client.hgetall("todo",function(err,reply) {
//     if(err) console.log('Error while fetching data', err)
//     console.log(reply)
// })

const getTodo = (req,res) => {
    client.hgetall("todo",function(err,reply) {
   if(err) console.log('Error while fetching data', err)
   res.status(200).json(reply)
})
}

// const deleteItem = item => {
//     client.del(item, function(err,reply) {
//         console.log('Error while deleting', err)
//         console.log('Deleted',reply)
//     })
// }

// const updateTodo = item => {
    

// }
//  let x = Date.now()
// addTodo(x,'a','note1')
//  getTodo(x)
//  deleteItem(x)
// addTodo(x,'b','note2')
// getTodo(x)
// addTodo(x,'c','note3')
// getTodo(x)

module.exports = {
    getTodo
}