export async function seed(knex) {
  await knex('visibility_filters').del();
  await knex('visibility_filters').insert([
    {
      name: 'All'
    },
    {
      name: 'Active'
    },
    {
      name: 'Completed'
    }
  ]);
}
