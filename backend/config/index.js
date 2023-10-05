module.exports = {
    environment: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8000,
    jwtConfig: {
      secret: process.env.JWT_SECRET,
    }
  };
