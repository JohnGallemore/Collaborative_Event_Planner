//Record input from the html forms
const form = document.getElementById('form')
const username_input = document.getElementById('username-input')
const password_input = document.getElementById('password-input')
const confirm_password_input = document.getElementById('confirm-password-input')
const error_messages = document.getElementById('errors')
const user = null
const is_new_user = false

//Handle the mongoDB stuff
const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = "mongodb+srv://AdminUser:administration@maincluster.1bujy.mongodb.net/?retryWrites=true&w=majority&appName=MainCluster"

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

connectToDB();

form.addEventListener('submit', (e) => {
    let errors = []
    
    //Checks to see if we are in login or create-profile
    if(confirm_password_input)
    {
        //If in create profile
        errors = getSignUpErrors(username_input.value, password_input.value, confirm_password_input.value)
        user = {
            name: username_input.value,
            password: password_input.value
        }
        is_new_user = true
    }
    else
    {
        //If in login
        errors = getLoginErrors(username_input.value, password_input.value)
    }

    //If there are any errors, do not allow submission and throw error messages
    if(errors.length > 0)
    {
        e.preventDefault()
        error_messages.innerText = errors.join(". ")
        is_new_user = false
    }

})

//Check for user error in the sign up process
function getSignUpErrors(username, password, confirmPass)
{
    let errors = []

    if(password !== confirmPass)
    {
        errors.push("Password and Confirmation Password do not match")
    }

    return errors
}

//Check for user errors in the login process
function getLoginErrors(username, password)
{
    let errors = []



    return errors
}


async function connectToDB(){
    try{
        await client.connect()
        console.log("Successfully connected to database.")
    }
    catch(err){
        console.error("Failed to connect to database. ", err)
    }
}

//Function to place a new user into the database.
async function insertUser(userInfo){
    try{
        const db = client.db("EventPlannerDatabase")
        const users = db.collection("users")
        users.insertOne(userInfo)
    }
    catch(err){
        console.error("Failed insertion", err)
    }
}

//Ensures the client is closed at the end of the program.
async function closeClient()
{
    try{
        await client.close()
        console.log("Connection closed successfully")
    }
    catch(err){
        console.error("Failed to close connection", err)
    }
}

if(new_user)
{
    insertUser(user)
}

closeClient()