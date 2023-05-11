const express = require('express');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Clientes', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });

  module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
  
  
  
