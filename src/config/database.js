module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  database: 'gobarber',
  password: 'docker',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
