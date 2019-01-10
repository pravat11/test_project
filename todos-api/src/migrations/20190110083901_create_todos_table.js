export function up(knex) {
  return knex.schema.createTable('todos', table => {
    table.increments('id');
    table.string('text').notNull();
    table
      .boolean('is_completed')
      .notNull()
      .default(false);
    table.timestamp('created_at').default(knex.fn.now());
    table.timestamp('updated_at').default(knex.fn.now());
  });
}

export function down(knex) {
  return knex.schema.dropTable('todos');
}
