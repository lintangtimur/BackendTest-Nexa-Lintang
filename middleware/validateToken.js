const jwt = require('jsonwebtoken');
const prisma = require("../connection/connection.js");

async function validateToken(req, res, next) {
  const auhorizationHeader = req.headers.authorization;
  let result;

  if (!auhorizationHeader) {
    return res.status(401).json({
      error: true,
      message: "Access token is missing",
    });
  }

  const token_post = req.headers.authorization.split(" ")[1];

  const options = {
    expiresIn: "24h",
  };

  
  try {
    console.log(token_post)
    let user = await prisma.admin_token.findFirst({
        where: {token: token_post},
        include: {
            admin: {
                select: { username: true },
            },
        },
      });
        
    console.log(user)
    if (!user) {
      result = {
        error: true,
        message: "Authorization error",
      };

      return res.status(403).json(result);
    }

    result = jwt.verify(token_post, "nexatest", options);

    if (!user.admin.username === result.username) {
      result = {
        error: true,
        message: "Invalid token",
      };

      return res.status(401).json(result);
    }

    req.decoded = result;

    next();
  } catch (error) {
    console.error(error);

    if (error.name === "TokenExpiredError") {
      return res.status(403).json({
        error: true,
        message: "Token expired",
      });
    }

    return res.status(403).json({
      error: true,
      message: "Authentication error",
    });
  }
}

module.exports = validateToken