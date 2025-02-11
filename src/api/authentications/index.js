const AuthenticationsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'authentications',
  version: '1.0.0',
  register: async (server, {
    authenticatioonsService,
    usersService,
    tokenManager,
    validator,
  }) => {
    const authenticationsHandler = new AuthenticationsHandler(
      authenticatioonsService,
      usersService,
      tokenManager,
      validator,
    );

    server.route(routes(authenticationsHandler));
  },
};
