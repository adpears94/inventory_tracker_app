/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id');
        table.string('user_name').primary().defaultTo('no name');
        table.string('squadron');
        table.string('base');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};


// exports.up = function(knex) {
//     return knex.schema.createTable('movies', table => {
//       table.increments('id'); // adds an auto incrementing PK column
//       table.string('title').notNullable();
//       table.string('genre');
//       table.date('release_date');
//       table.timestamps(true, true); // adds created_at and updated_at
//     });
//   };