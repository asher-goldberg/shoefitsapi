// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
  test: {
    client: 'pg',
    connection: 'postgres://postgres:postgres@localhost/test-shoefitdb',
    migrations: {
      directory : 'db/migrations'
    },
    seeds: {
      directory : 'db/seeds'
    },
  },
}
