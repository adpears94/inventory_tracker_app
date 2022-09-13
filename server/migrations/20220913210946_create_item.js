/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("item", (table) => {
    table.increments("id");
    table.string("item_name");
    table.string("item_description");
    table.integer("category_id");
    table.foreign("category_id").references("category.id");
    table.integer("sub_category_id");
    table.foreign("sub_category_id").references("sub_category.id");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("item");
}
