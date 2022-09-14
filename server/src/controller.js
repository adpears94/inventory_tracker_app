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
//select item_name, item_description, category_name, sub_category_name, checked_out from item join category on category_id = category.id join sub_category on sub_category_id = sub_category.id;

const getMasterInventory = () => {
    return knex('master_inventory').select('*').whereNot('item_id', null);
};



module.exports = {
    getAllUsers,
    getAllCategories,
    getAllSubCategories,
    getAllItems,
    getMasterInventory,
    
  
  };