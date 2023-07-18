const axios = require("axios")
//const data = require("../utils/data")

const getCharById = (res , id)=>{
    axios(`http://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
        const {
            id,
            name, 
            gender, 
            species, 
            origin:{name: origin}, 
            image, 
            status
        } = data
        const char = {
            id,
            name,
            gender,
            species,
            origin,
            image,
            status
        }
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify(char))
    })
    .catch(err => /*alert(err.response.data.error)*/{
        res.writeHead(500, {"Content-Type": "text/plain"})
        res.end(err.response.data.error)
    })
}

// getCharById("h",100)

module.exports = getCharById;