module.exports = {
  production: false,
  server: {
    port: '4000',
    adminPort: '4001',
  },
  sqlDb: {
    port: '3306',
    host: 'search-searched-zynf7am35kelqsqflpka6jvcky.aos.ap-south-1.on.aws',
    protocol: 'https',
    auth: 'admin:Admin12345@',
  },
  jwt: {
    tokenSecret: 'developmentjwtsecret',
    tokenExpireTime: '8h',
    refreshTokenSecret: 'developmentrefreshjwtsecret',
    refreshTokenExpireTime: '180 days',
    refreshTokenHashSecret: 'refreshTokenHash',
    saltRounds: '2',
  },
  email: {
    sourceAddress: 'noreply@gleemeet.com',
    replyToAddress: 'noreply@gleemeet.com',
  },
};
