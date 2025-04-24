const express = require('express');
const app = express();
const PORT = 3000;

const data = ['James']
//Middleware
app.use(express.json());

//HTTP Verbs and routes

//The method informs the nature of the request and the route informs the server what resource is being requested.


//Website endpoints: these are for sending back HTML and they come when the users enters a URL in the browser.
app.get('/', (req, res) => {
    //Endpoint number 1
    res.send(
        `
        <body
        style="background-color: pink;color: blue;"
        >
            <h1>DATA:</h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
        </body>
        `);
    console.log('JACKPOT!', req.method);
    res.sendStatus(200);

})

app.get('/dashboard', (req, res) => {
    //Endpoint number 2
    res.send(`
        <body>
            <h1>Dashboard</h1>
            <a href="/">Home</a>
        </body>
        
        `)
    console.log('I created a /dashboard endpoint!');
    res.send('Hi!');
})

//API endpoints
//CRUD: CREATE-POST, READ-GET, UPDATE-PUT, DELETE-DELETE       
app.get('/api/data', (req, res) => {
    res.send(data);
})

app.post("/api/data", (req, res) => {
    //Someone wants to create a user like when the click a sign up button
    //The user clicks sign up after enter the credentials in the form and the browser is wiredup
    //to send a POST request to the server to handle the data/actions
    const newData = req.body
    console.log(newData);
    data.push(newData.name);
    res.sendStatus(201)
})

app.delete("/api/data", (req, res) => {
    data.pop()
    console.log("Deleted las element of the array")
    res.sendStatus(203)
})

//Port initialization and server start 
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});