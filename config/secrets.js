module.exports = {
  db: 'localhost',

  sessionSecret: "Your Session Secret goes here",

  sendgrid: {
    user: 'Your SendGrid Username',
    password: 'Your SendGrid Password'
  },

  nyt: {
    key: 'Your New York Times API Key'
  },

  lastfm: {
    api_key: 'Your API Key',
    secret: 'Your API Secret'
  },

  facebook: {
    clientID: '1447823235446872',
    clientSecret: '8b83e5802ef968320f8f5b518dc10523',
    callbackURL: '/auth/facebook/callback',
    passReqToCallback: true
  },

  github: {
    clientID: 'a08b77c12f37e37a4acb',
    clientSecret: '538854668c616a696a9867c713f0fc126ba68afa',
    callbackURL: '/auth/github/callback',
    passReqToCallback: true
  },

  twitter: {
    consumerKey: 'Your Consumer Key',
    consumerSecret: 'Your Consumer Secret',
    callbackURL: '/auth/twitter/callback',
    passReqToCallback: true
  },

  google: {
    clientID: '841915824288-qm3bfg4hi78ip795k0jb9er7fp8jusut.apps.googleusercontent.com',
    clientSecret: 'venECiqnkfGvnJ5pqHhY-J07',
    callbackURL: '/auth/google/callback',
    passReqToCallback: true
  },
  
  steam: {
    apiKey: 'Your Steam API Key'
  },

  twilio: {
    sid: 'Your Account SID',
    token: 'Your Auth Token'
  },

  tumblr: {
    consumerKey: 'Your Consumer Key',
    consumerSecret: 'Your Consumer Secret',
    callbackURL: '/auth/tumblr/callback'
  },

  foursquare: {
    clientId: 'Your Client ID',
    clientSecret: 'Your Client Secret',
    redirectUrl: 'http://localhost:3000/auth/foursquare/callback'
  },

  paypal: {
    host: 'api.sandbox.paypal.com', // or api.paypal.com
    client_id: 'Your Client ID',
    client_secret: 'Your Client Secret',
    returnUrl: 'http://localhost:3000/api/paypal/success',
    cancelUrl: 'http://localhost:3000/api/paypal/cancel'
  }
};
