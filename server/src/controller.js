// const knex = require('knex')(require('../knexfile.js')['development']);
const knex = require('knex')(
    require('../knexfile.js')[process.env.NODE_ENV || 'development']);

const getAllUsers = () => {
    return knex('users').select('*').whereNot('user_name', null);
  };

const getAllCategories = () => {
    return knex('category').select('*').whereNot('category_name', null);
};
const getAllSubCategories = () => {
    return knex('sub_category').select('*').whereNot('sub_category_name', null);
};
const getAllItems = () => {
    return knex('item').select('*').whereNot('item_name', null);
};

const getMasterInventory = () => {
    return knex('master_inventory').select('*').whereNot('item_id', null);
};

  





module.exports = {
    getAllUsers,
    getAllCategories,
    getAllSubCategories,
    getAllItems,
    getMasterInventory
  };