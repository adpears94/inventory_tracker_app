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

//select item_name, item_description, category_name, sub_category_name, checked_out from item join category on category_id = category.id join sub_category on sub_category_id = sub_category.id;
//select item.id, item_name, item_description, category_name, sub_category_name, checked_out, user_name, users.id from item join category on category_id = category.id join sub_category on sub_category_id = sub_category.id join users on user_id = users.id;
// db = inventory_project_3
// const posts = await db('posts')
//   .join('users', 'users.id', 'posts.user_id')
//   .select('posts.id', 'users.username', 'posts.contents')
//   .where({user_id: id})

// const itemsWithUsers = () => {
//     return knex('users')
//     .join('category', 'category_id', '=', 'users.category.id')
//     .select('item_name', 'item_description', 'category_name', 'sub_category_name', 'checked_out')
// }

// const joinedTable = () => {
    // return knex('users')
    // .join('category', 'category_id', '=', 'users.category.id)
    // .select('item_name', 'item_description', 'category_name', 'sub_category_name', 'checked_out')
// }

const itemsWithUsers = () => {
    return knex
      .select('item.id','item_name', 'item_description', 'category_name', 'sub_category_name', 'checked_out', 'user_name', 'users.id as user_id')
      .from("item")
      .join("category", {"category_id": "category.id"})
      .join("sub_category", {"sub_category_id": "sub_category.id"})
      .join('users', {"user_id": "users.id"})
      .orderBy('item.id', 'asc')
    //   .join("sub_category_id", "=", "sub_category.id");
}



    //knex.select

module.exports = {
    getAllUsers,
    getAllCategories,
    getAllSubCategories,
    getAllItems,
    getMasterInventory,
    itemsWithUsers
    
  
  };