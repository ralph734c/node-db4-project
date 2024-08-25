exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('steps', (tbl) => {
    tbl.increments('stepId').primary();
    tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes');
    tbl.integer('step_number').notNullable();
    tbl.text('step_instructions', 256).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('steps');
};
