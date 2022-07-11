const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const isCustomAuth = token.lenght < 500;
    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, 'test');

      req.userId = decodedData?.id;
    } else {
      //for googleAuth token
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }

    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = auth;
