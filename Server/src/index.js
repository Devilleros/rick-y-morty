const http = require("http");
const getCharById = require("./controllers/getCharById")
//const data = require("./utils/data")
const PORT = 3001;

http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
     if(req.url.includes("/rickandmorty/character")){
        let id = req.url.split("/").at(-1);
        getCharById(res,id)
    //     let id = req.url.split("/").at(-1);
    //     let character = data.find(char => char.id === Number(id));
    //     res.writeHead(200, {"Content-Type" : "application/json"})
    //     res.end(JSON.stringify(character))
     }
}).listen(PORT , "localhost")