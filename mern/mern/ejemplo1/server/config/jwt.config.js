const jwt = require("jsonwebtoken");

const secretKey = "Esta es mi super clave";

module.exports.secretKey = secretKey;

module.exports.autenticar = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, secretKey, (err, payload) => {
      if (err) { 
        res.status(401).json({verified: false});
      } else {
        next();
      }
    });
  }