export function up(knex) {
  return knex.schema.createTable('visibility_filters', table => {
    table.increments('id');
    table.string('name').notNull();
  });
}

export function down(knex) {
  return knex.schema.dropTable('visibility_filters');
}
