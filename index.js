//HAVING AN ISSUE WITH PORTS....USED 8000, 8001, 8002


//Exercise 1
//create the reference to the express module
let express=require('express')
//create the server using 'app
let app=express();
//define a route
app.get('/', (req, res)=>{
    res.send('Welcome to my node + express server')
})


//Exercise 2
//Define userName variable
let userName= "Charles"
//Define routes for '/displayName
app.get('/displayName', (req, res)=>{
    res.send(`The name displayed is ${userName}`)
})

//Exercise 3
//Create Array
let studentArray = ['Charles , High', 'Johnny , Low', 'Ray , Medium', 'Tom , High']




//Define route
app.get('/student/:id', (req, res)=>{
    req.params.id
    studentArray.forEach((student, index)=>{
        if (index == req.params.id)
        res.send(`The student name and confidence level is ${student}`)
    })
})



//Exercise 4
let listOfStudents=studentArray

//define All students route
app.get('/allStudents', (req, res)=>{
    res.send(`this list of students is ${listOfStudents}`)
})

//create the listener and pass port and callback
app.listen(8002, ()=>{
    console.log("listening on port 8002")
})