
exports.up = function(knex) {
  return knex.schema
    .createTable("hateits", tbl => {
      tbl.increments();
      tbl.varchar('least fav season').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("hateits");
};