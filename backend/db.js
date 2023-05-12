const express = require('express');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  });

try {
    sequelize.authenticate();
    console.log('Conexão estbabelecida com sucesso')
}catch{
    console.log('Erro ao estabelecer conexão');
}


  module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
  
  
  
