const express = require ('express');

const makerModel = require ('../model/makerModel');


const router = express.Router();
//Inserção de dados na tabela fabricante
router.post('/maker/insert', (req, res)=>{
    let {name_maker,
    cnpj_maker,
    email_maker,
    phone_maker}  = req.body;

    makerModel.create(
        {name_maker,cnpj_maker,phone_maker,email_maker}
    )
    //Pausa a controller, até que tenha um resultado
    .then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus: false,
                    mensageStatus:'Fabricante inserido com sucesso!'
                }
            )
        }
    )
    //Capiturando o Erro, caso tenha!
    .catch(
        (error)=>{
            return res.status(500).json(
                {
                    errorStatus: true,
                    messageStatus: error
                }
            )
        }
    )


});      
//Seleção de dados da tabela fabricante
router.get('/maker/select', (req, res)=>{
    makerModel.findAll()
    .then((maker)=>{
        res.json(maker)
    })
    //Capiturando o Erro, caso tenha!
    .catch(
        (error)=>{
            return res.status(500).json({
                errorStatus: true,
                messageStatus: error
            })
        }
    )
});
//Alteração de dados na tabela fabricante
router.put('/maker/alter',(req, res)=>{
    let id = req.body.id;
    let {name_maker,
        cnpj_maker,
        phone_maker,
        email_maker} = req.body;


//Metodo de alteração
    makerModel.update(
        {name_maker,cnpj_maker,phone_maker, email_maker},
        {where:{id}}
    )
    //Pausa a controller, até que tenha um resultado
    .then(
        ()=>{
            return res.status(200).json(
                {
                errorStatus: false,
                messageStatus: 'Fabricante alterado com sucesso!'
            })
        }
    )
    //Capiturando o Erro, caso tenha!
    .catch(
        (error)=>{
            return res.status(500).json(
                {
                errorStatus: false,
                messageStatus: error
            })
        }
    )    

});
//Exclusão de dados na tabela fabricante
router.delete('/maker/delete/:id',(req, res)=>{
    let id = req.params.id;
//Metodo de exclusão
    makerModel.destroy(
        {where:{id}}
        )
        //Pausa a controller, até que tenha um resultado
        .then(
            ()=>{
                return res.status(200).json({
                    errorStatus: false,
                    messageStatus:'Fabricante excluido com sucesso!'
                }
                )
            }
        )
        //Capiturando o Erro, caso tenha!
        .catch(
            (error)=>{
                return res.status(500).json({
                    errorStatus: true,
                    messageStatus: error
                }
                )
            }
        )
});

module.exports = router;