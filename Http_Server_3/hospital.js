/*create an in memory hospital
You need to create 4 routes (4 things that the hospital can do)
1. GET - User can check how many kidneys they have and their health
2. POST - User can add a new kidney
3. PUT - User can replace a kidney, make it healthy
4. DELETE - User can remove a kidney */

const express = require("express");
const app = express();

app.use(express.json());

const users = [{
    name: "Dhruv",
    kidneys:[{
        healthy: false
    }]
}];

app.get("/",function(req,res){
    const dhruv_kidneys = users[0].kidneys; //kidney array will be stored in variable dhruv_kidneys
    const number_of_kidneys = dhruv_kidneys.length;

    let number_of_healthy_kidneys = 0;
    for(let i = 0; i < number_of_kidneys;i++){
        if (dhruv_kidneys[i].healthy === true){
            number_of_healthy_kidneys = number_of_healthy_kidneys + 1;
        }
    }
    const number_of_unhealthy_kidneys = number_of_kidneys - number_of_healthy_kidneys

    /*res.json({
        number_of_kidneys,
        number_of_unhealthy_kidneys,
        number_of_healthy_kidneys,
    })*/

    res.send("number of kidneys: " + number_of_kidneys +
        " ,number of healthy kidneys: " + number_of_healthy_kidneys +
", number of unhealthy kidneys: " + number_of_unhealthy_kidneys);

/*You cannot directly send both res.json() and res.send()
together in the same response. Express allows only one response
to be sent per request.*/

});

app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;  //through req.body we send the data through post requests
    // as in case of get request we send data or query params through req.query

    users[0].kidneys.push({
        healthy:isHealthy
    }); // it updates the in-memory array that is created which is users here.

    res.send("your post request has updated the in memory database. send a get request and see the changes done"
 +  ", number of kidneys: "+ users[0].kidneys.length);
})

app.put("/",function(req,res){
    for (let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.send("all kidneys are updated to healthy ones")

})

app.delete("/",function(req,res){
    const newKidneys = []
    for (let i = 0; i < users[0].kidneys.length; i++){
        if (users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.send("all unhealthy kidneys are removed");
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });