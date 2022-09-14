/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("item", (table) => {
    table.increments("id");
    table.string("item_name");
    table.string("item_description");
    table.integer("category_id");
    table.foreign("category_id").references("category.id");
    table.integer("sub_category_id");
    table.foreign("sub_category_id").references("sub_category.id");
    table.boolean("checked_out").defaultTo(false);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("item");
};

// The table.timestamps(false, true) line adds created_at and updated_at columns on the table. Both columns default to being not null and using the current timestamp when true is passed as the second argument.
// table.timestamp(name, options={[useTz: boolean], [precision: number]})