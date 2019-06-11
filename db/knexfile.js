// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://postgres:2737fitch@localhost/shoefitdb'
  },
  test: {
    client: 'pg',
    connection: 'postgres://postgres:2737fitch@localhost/test-shoefitdb',
    migrations: {
      directory : 'db/migrations'
    },
    seeds: {
      directory : 'db/seeds'
    },
  },
}
