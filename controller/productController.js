const express = require ('express');

const productModel = require ('../model/productModel');
const upload = require('../help/upload/upload');


const router = express.Router();
//Inserção de dados na tabela fabricante
router.post('/product/insert',upload.array('photo_product',1), (req, res)=>{
    let {name_product,value_product, 
    description_product, 
    tblMakerId} = req.body;

    let photo_product = req.files[0].path


    productModel.create(
        {name_product,
            value_product,
            description_product, 
            photo_product,
            tblMakerId}
    )
    //Pausa a controller, até que tenha um resultado
    .then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus: false,
                    mensageStatus:'Produto inserido com sucesso!'
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
router.get('/product/select', (req, res)=>{
    productModel.findAll()
    .then((product)=>{
        res.json(product)
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
router.put('/product/alter',(req, res)=>{
    let id = req.body.id
    let {name_product, 
        value_product,
        description_product,
        tblMakerId} = req.body;
    

//Metodo de alteração
    productModel.update(
        {name_product,
            value_product,
            description_product,
            tblMakerId},
        {where:{id}}
    )
    //Pausa a controller, até que tenha um resultado
    .then(
        ()=>{
            return res.status(200).json(
                {
                errorStatus: false,
                messageStatus: 'Produto alterado com sucesso!'
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
router.delete('/product/delete/:id',(req, res)=>{
    let id = req.params.id;
//Metodo de exclusão
    productModel.destroy(
        {where:{id}}
        )
        //Pausa a controller, até que tenha um resultado
        .then(
            ()=>{
                return res.status(200).json({
                    errorStatus: false,
                    messageStatus:'Produto excluido com sucesso!'
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