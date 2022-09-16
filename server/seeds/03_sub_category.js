/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw("TRUNCATE sub_category CASCADE");
  await knex('sub_category').del()
  await knex("sub_category").insert([
    /*1*/ { id: 1, sub_category_name: "displays", category_id: 1 },
    /*2*/ { id: 2, sub_category_name: "laptop", category_id: 1 },
    /*3*/ { id: 3, sub_category_name: "desktop", category_id: 1 },
    /*4*/ { id: 4, sub_category_name: "peripherals", category_id: 1 },
    /*5*/ { id: 5, sub_category_name: "office supplies", category_id: 1 },
    /*6*/ { id: 6, sub_category_name: "charging station", category_id: 1 },
    /*7*/ { id: 7, sub_category_name: "couch", category_id: 2 },
    /*8*/ { id: 8, sub_category_name: "table", category_id: 2 },
    /*9*/ { id: 9, sub_category_name: "chair", category_id: 2 },
    /*10*/ { id: 10, sub_category_name: "truck", category_id: 3 },
    /*11*/ { id: 11, sub_category_name: "sedan", category_id: 3 },
    /*12*/ { id: 12, sub_category_name: "SUV", category_id: 3 },
  ]);
};
