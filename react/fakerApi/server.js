const faker = require('faker');
const express = require("express");
const app = express();
const port = 8000;



// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );


class Company{
    constructor(){
        this.id = faker.random.number();
        this.name = faker.company.companyName();
        this.address = faker.address.streetName() + faker.address.city() + faker.address.state() + faker.address.zipCode() + faker.address.country();
    }
}
class User{
    constructor(){
        this.id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phone = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.email = faker.internet.password();
    }
}

const user = new User; 
const company = new Company; 
app.get("/api/users/new", (req, res) => {
    res.json({ message:  user});
});

app.get("/api/companies/new", (req, res) => {
    res.json({ message:  company});
});

app.get("/api/user/company", (req, res) => { 
    res.json({ message:  company, user});
});