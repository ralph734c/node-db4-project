exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('ingredients', (tbl) => {
    tbl.increments('ingredientId').primary();
    tbl.text('ingredient_name', 100).notNullable();
    tbl.decimal('quantity').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('ingredients');
};
