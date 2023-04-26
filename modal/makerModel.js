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
const maker = connection.define(
    'tbl_maker',
    {
        name_maker:{
            type: sequelize.STRING,
            allowNull: false
        },
        cnpj_maker:{
            type: sequelize.STRING,
            allowNull: false
        }
    }
);
//UTILIZAR APENAS UMA VEZ PARA A CRIAÇÃO DA TABLE
//maker.sync({force:true});

module.exports = maker;