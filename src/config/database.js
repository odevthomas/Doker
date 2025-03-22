// src/config/database.js
export const config = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'odevthomas',
  password: 'odevthomas',
  database: 'acme_production',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
