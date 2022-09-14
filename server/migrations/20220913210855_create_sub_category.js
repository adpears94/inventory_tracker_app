/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 * 
 */exports.up = function(knex){
  return knex.schema.createTable("sub_category", (table) => {
    table.increments("id");
    table.string("sub_category_name");
    table.integer('category_id');
    table.foreign('category_id').references('category.id');
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function(knex) {
  return knex.schema.dropTableIfExists("sub_category");
}
