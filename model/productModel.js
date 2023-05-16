/* IMPORTAÇÃO DO SEQUELIZE */
const sequelize  = require('sequelize');

/* IMPORTAÇÃO DA CONEXÃO COM O BANCO DE DADOS */
const connection = require('../database/database');



/* 
DEFINIÇÃO DA ESTRUTURA DA TABELA DE CATEGORIAS 
PARAMETROS:
1 - NOME DA TABELA
2 - UM OU MAIS OBJETOS JSON QUE VÃO REPRESENTAR OS CAPOS, SEUS TIPOS E
    REGRAS DE PREENCHIMENTO
*/
const product = connection.define(
    'tbl_product',
    {
        name_product:{
            type: sequelize.STRING,
            allowNull: false
        },
        value_product:{
            type: sequelize.DECIMAL(6,3),
            allowNull: false
        },
        description_product:{
            type: sequelize.STRING,
        }
    }
);

//UTILIZAR APENAS UMA VEZ PARA A CRIAÇÃO DA TABLE
//product.sync({force:true});

module.exports = product;