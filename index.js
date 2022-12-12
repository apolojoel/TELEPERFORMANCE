const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

let RegistrationsaveArr = []

//#region 

app.use(
    express.urlencoded({
        extended :true
    })
)

app.use(express.json({
    type: "*/*"
})) 

app.use(cors());
//#endregion


app.get('/Registrationsave', (req,res)=>{
    res.send('perfect' )

})

app.post ('/Registrationsave',(req, res)=>{
    let Registrationsave = req.body;
    RegistrationsaveArr.push(Registrationsave)
    res.send(JSON.stringify("save"))
 console.log(RegistrationsaveArr)  
})

app.listen(port, () => {
    console.log('http//localhost:$(port)' )
})
