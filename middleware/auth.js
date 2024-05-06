const basicAuth = require('basic-auth');
const { ADMIN_LOGIN, ADMIN_PASSWORD } = process.env;

const auth = (req, res, next) => {
  const user = basicAuth(req);
  if (!user || user.name !== ADMIN_LOGIN || user.pass !== ADMIN_PASSWORD) {
    res.set('WWW-Authenticate', 'Basic realm="401"');
    res.status(401).json({ message: 'Authentication required.' });
    return;
  }
  next();
};

module.exports = auth;
