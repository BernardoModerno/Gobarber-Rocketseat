module.exports = {
  dialect: 'postgres',
  port: 5433,
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
