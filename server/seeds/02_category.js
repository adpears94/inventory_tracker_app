/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw("TRUNCATE category CASCADE");
  await knex('category').del()
  await knex('category').insert([
    {category_name: 'technology'},
    {category_name: 'furniture'},
    {category_name: 'vehicles'},
  ]);
};
