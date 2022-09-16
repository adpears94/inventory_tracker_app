/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw("TRUNCATE category CASCADE");
  await knex('category').del()
  await knex("category").insert([
    { id: 1, category_name: "technology" },
    { id: 2, category_name: "furniture" },
    { id: 3, category_name: "vehicles" },
  ]);
};
