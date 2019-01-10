export function up(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id');
    table.string('name').notNull();
    table.string('address').notNull();
    table.timestamps();
  });
}

export function down(knex) {
  return knex.schema.dropTable('users');
}
