module.exports = {
  development: {
    client: 'mysql',
    version: '5.7',
    useNullAsDefault: true,
    connection: {
      database: 'lender_App',
      user: 'root',
      password: '',
      host: 'localhost',
      port: 3306,
      ssl: false,
    },

    migrations: {
      directory: './migrations/users',
      tableName: '[:name_file_migrations_users]',
    },
  },
};
