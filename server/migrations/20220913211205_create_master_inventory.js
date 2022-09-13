/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("master_inventory", (table) => {
    table.increments("id");
    table.integer("item_id");
    table.foreign("item_id").references("item.id");
    table.integer("user_id");
    table.foreign("user_id").references("users.id");
    table.timestamp("check_out").defaultTo(null);
    table.timestamp("check_in").defaultTo(null);
   
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("master_inventory");
}

//table.timestamp('created_at').defaultTo(knex.fn.now());