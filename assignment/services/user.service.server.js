/**
 * Created by harsh on 7/26/2017.
 */
var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
];

// html handlers:
app.post("/api/user", createUser);
app.get("/api/users", getAllUsers);
app.get("/api/user/:userId", findUserById);
app.get("/api/user?username=username", findUserByUsername);
app.get("/api/user?username=username&password=password", findUserByCredentials);
app.put("/api/user/:userId", updateUser);
app.delete("/api/user/:userId", deleteUser);


function createUser(req, response) {

}

function getAllUsers(req, response) {
    response.send(users);
}

function findUserById(req, response) {
    for (var u in users) {
        if (users[u]._id === req.params.userId) {
            response.send(users[u]);
        }
    }
}

function findUserByUsername(req, response) {
    for(var u in users){
        var _user = users[u];
        if(_user.username === req.params.username){
            response.send(_user);
        }
    }
    response.send(null);
}

function findUserByCredentials(req, response) {

}

function updateUser(req, response) {

}

function deleteUser(req, response) {

}