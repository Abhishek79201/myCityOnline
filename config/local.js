module.exports = {
  production: false,
  server: {
    port: '4000',
    adminPort: '4001',
  },
  mongoDB: {
    uri: 'mongodb://localhost:27017/dotodo',
    protocol: 'https',
  },
  jwt: {
    tokenSecret: 'developmentjwtsecret',
    tokenExpireTime: '8h',
    refreshTokenSecret: 'developmentrefreshjwtsecret',
    refreshTokenExpireTime: '180 days',
    refreshTokenHashSecret: 'refreshTokenHash',
    saltRounds: '2',
  }
};
