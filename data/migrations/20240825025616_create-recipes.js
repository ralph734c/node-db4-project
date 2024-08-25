exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('recipes', (tbl) => {
    tbl.increments('recipeId').primary();
    tbl.text('name', 128).unique().notNullable();
    tbl.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('recipes');
};
