/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw("TRUNCATE item CASCADE");
  await knex('item').del()
  await knex('item').insert([
    /*1*/ {item_name: 'MacBook Pro', item_description: 'Silver 13in MacBook Pro', category_id: 1 , sub_category_id: 2},
    /*2*/ {item_name: 'Dell Display 27', item_description: 'Black Dell 27in Display', category_id: 1 , sub_category_id: 1},
    /*3*/ {item_name: 'Chevrolet Impala', item_description: '2021 Blue Chevrolet Impala', category_id: 3 , sub_category_id: 9},
    /*4*/ {item_name: 'Razr Keyboard', item_description: 'Green Razr Keyboard', category_id: 1 , sub_category_id: 4},
    /*5*/ {item_name: 'Xerox VersaLink C405', item_description: 'Network Laser Printer', category_id: 1 , sub_category_id: 5},
    /*6*/ {item_name: 'La-Z-boy Couch', item_description: 'A yellow couch', category_id: 2, sub_category_id: 5, checked_out: true},
    /*7*/ {item_name: 'Recliner', item_description: 'Brown leather recliner', category_id: 2, sub_category_id: 6, checked_out: true},
  ]);
};