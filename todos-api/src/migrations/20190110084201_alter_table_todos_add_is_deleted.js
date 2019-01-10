export function up(knex) {
  return knex.schema.table('todos', table => {
    table
      .boolean('is_deleted')
      .notNull()
      .default(false);
  });
}

export function down(knex) {
  return knex.schema.table('todos', table => {
    table.dropColumn('is_deleted');
  });
}
