const router = require('express').Router();
const mongojs = require('mongojs');

//Conectar base de datos
const db = mongojs('registro',['registros']);


router.get('/registro',(req , res, next) =>{
     db.registros.find((err, registros) => {
         if(err) return next(err);
         res.json(registros);
     });
});
//Obtener datos
router.get('/registro/:id',(req , res, next) =>{
    db.registros.findOne({_id: mongojs.ObjectId(req.params.id)},(err, task) => {
        if(err) return next(err);
        res.json(registros);
    });
});
//Post
router.post('/registro',(req, res, next) =>{
//Req.body trae informacion del cliente
    const registro = req.body;
    if(!registro.name || !registro.ced || !registro.telf){
        res.status(400).json({
           error: 'Bad Data'
            
        });
    } else{
        db.registros.save(registro, (err , registro)=>{
            if(err) return next(err);
            res.json(registro);
        });
    }
});
//Delete
router.delete('/registro/:id',(req, res, next) => {
    db.registros.remove({_id: mongojs.ObjectId(req.params.id)}, (err, result) =>{
        if(err) return next(err);
        res.json(result);
    });
});
module.exports= router;