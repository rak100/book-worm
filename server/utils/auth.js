const jwt = require("jsonwebtoken");

const secret = "secret_1";
const expiration = "1h";

//export the modules
module.exports = {
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },

  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;
    console.log("TOKEN", token);
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }
    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      console.log("DATA", data);
      req.user = data;
    } catch {
      console.log("Invalid token");
    }

    return req;
  },
};
