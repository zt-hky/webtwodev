var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    Models = require('../models/index');

opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET;

module.exports = passport => {
    passport.use('client', new JwtStrategy(opts, function(jwt_payload, done) {
        Models.Admin.findOne({ where: { username: jwt_payload.username } })
            .then(admin => {
                if (admin) {
                    done(null, admin);
                } else {
                    done(null, false);
                }
            }).catch(e => {
                done(e, false);
            });

    }));
}