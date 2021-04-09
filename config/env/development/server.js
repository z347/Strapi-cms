module.exports = ({ env }) => ({
  host: env('SERVER_HOST_DEV', '0.0.0.0'),
  port: env.int('SERVER_PORT_DEV', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '03059409398af85ecad93117cdbba1fb'),
    },
  },
});
