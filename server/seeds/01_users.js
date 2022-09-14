/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
// export async function seed(knex)
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE users CASCADE');
  await knex('users').del();
  await knex('users').insert([
    {user_name: 'markscarna', squadron: '375th CSPTS', base: 'Scott AFB'},
    {user_name: 'miguelcastro22', squadron: '2 SOPS', base: 'Schriever SFB'},
    {user_name: 'averypp91', squadron: '45 SFS', base: 'Patrick SFB'},
  ]);
};

// export async function seed(knex) {
//   // Deletes ALL existing entries
//   await knex.schema.raw('TRUNCATE artist CASCADE')
//   await knex('artist').del()
//   await knex('artist').insert([
//     {artist_name: 'Eminem'},
//     {artist_name: 'SPM'},
//     {artist_name: 'Metallica'}
//   ]);
// };

// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('users').del()
//   .then(function () {
//     // Inserts seed entries
//     return knex('users').insert([
//       {
//         id: 1,
//         email: 'nigel@email.com',
//         password: 'dorwssap'
//       },
//       {
//         id: 2,
//         email: 'nakaz@email.com',
//         password: 'password1'
//       },
//       {
//         id: 3
//         email: 'jaywon@email.com',
//         password: 'password123'
//       }

/*
-useful run commands-
SELECT song_name, artist_name FROM songs JOIN artist ON artist_id = artist.id;
docker exec -it be3 bash: access database in terminal via docker
npx knex seed:run
npx knex migrate:rollback
npx knex migrate:latest
npx knex migrate:up
npx knex seed:make
dumb stuff:  //await knex.schema.raw('TRUNCATE artist CASCADE')
npm i dotenv 
*/