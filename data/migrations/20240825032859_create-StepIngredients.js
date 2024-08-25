/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('StepIngredients', (tbl) => {
    tbl.increments('stepIngredientId').primary();
    tbl
      .integer('stepId')
      .unsigned()
      .notNullable()
      .references('stepId')
      .inTable('steps')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl
      .integer('ingredientId')
      .unsigned()
      .notNullable()
      .references('ingredientId')
      .inTable('ingredients')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('StepIngredients');
};
