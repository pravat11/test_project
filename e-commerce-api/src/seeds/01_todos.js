export async function seed(knex) {
  await knex('todos').del();
  await knex('todos').insert([
    {
      text: 'My first todo'
    },
    {
      text: 'My second todo'
    }
  ]);
}
