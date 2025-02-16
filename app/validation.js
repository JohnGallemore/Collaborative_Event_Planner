//Handle the mongoDB stuff
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://AdminUser:<db_password>@maincluster.1bujy.mongodb.net/?retryWrites=true&w=majority&appName=MainCluster";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const db = client.db("EventPlannerDatabase")
const users_collection = db.collection("users")


//Record input from the html forms
const form = document.getElementById('form')
const username_input = document.getElementById('username-input')
const password_input = document.getElementById('password-input')
const confirm_password_input = document.getElementById('confirm-password-input')
const error_messages = document.getElementById('errors')

form.addEventListener('submit', (e) => {
    let errors = []
    
    //Checks to see if we are in login or create-profile
    if(confirm_password_input)
    {
        //If in create profile
        errors = getSignUpErrors(username_input.value, password_input.value, confirm_password_input.value)
        const user = {
            name: username_input.value,
            password: password_input.value
        }
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
    }

})

function getSignUpErrors(username, password, confirmPass)
{
    let errors = []

    if(username === '' || username == null)
    {
        errors.push("Username is required")
    }

    if(password !== confirmPass)
    {
        errors.push("Password and Confirmation Password do not match")
    }

    return errors
}

function getLoginErrors(username, password)
{
    let errors = []



    return errors
}

async function insertUser(data){
    try{
        const insterted = await users_collection.insertOne(data)
        console.log('Inserted successfully, id: ${inserted.insertedId}')
    }
    catch(err){
        console.error("Failed insertion", err)
    }
}

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
closeClient()