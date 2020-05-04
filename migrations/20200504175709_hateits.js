
exports.up = function(knex) {
  knex.schema
    .createTable("hateits", tbl => {
      tbl.increments();
      tbl.varchar('least fav season').notNullable();
    });
};

exports.down = function(knex) {
  knex.schema
    .dropTableIfExists("hateits");
};
