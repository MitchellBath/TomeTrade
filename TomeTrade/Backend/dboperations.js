const config = require('./dbconfig.js');

const getUsers = async() => {
    try {
        let pool = await sql.connect(config);
        let users = pool.request().query("SELECT * FROM users");
        console.log(users);
        return users;
    }
    catch(error){
        console.log(error);
    }
}