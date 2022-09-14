/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw("TRUNCATE master_inventory CASCADE");
  await knex('master_inventory').del()
  await knex('master_inventory').insert([
    {item_id: 1, user_id: 1},
    {item_id: 2, user_id: 2},
    {item_id: 3, user_id: 3},
    {item_id: 4, user_id: 2},
    {item_id: 5, user_id: 1},
    {item_id: 6, user_id: 2},
    {item_id: 7, user_id: 3},
  ]);
};
