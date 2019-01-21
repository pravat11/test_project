export function up(knex) {
  return knex.schema.createTable('todos', table => {
    table.increments('id');
    table.string('text').notNull();
    table
      .boolean('is_completed')
      .notNull()
      .default(false);
    table.string('created_at').default(new Date().toISOString());
    table.string('updated_at').default(new Date().toISOString());
  });
}

export function down(knex) {
  return knex.schema.dropTable('todos');
}
