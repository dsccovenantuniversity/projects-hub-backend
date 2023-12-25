require("dotenv").config()
const http = require("http")
const app = require("./app")

const server = http.createServer(app)
const port = process.env.PORT || 3000
//start server
const startserver = ()=>{
    server.listen(port, ()=>{
        if(process.env.ENV === "development") 
        console.log(`Server running on port ${port}`)
    })
}
startserver()