const axios = require('axios');

module.exports = {
    logout: (req, res) => {
        req.session.destroy();
        res.status(200).json({message: 'Logged 0ut!'})
    },
    handleCallback: (req, res) => {
        exchangeCodeForAccessToken()
        .then(exchangeAccessTokenForUserInfo)
        .then(storeUserInfoInDatabase)
        .catch(error => {
            console.error('A problem occured in handleCallback', error);
            res.status(500).send('An unexpected error has happened in the server')
        });

        function exchangeCodeForAccessToken() {
            const payload = {
                client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
                client_secret: process.env.AUTH0_CLIENT_SECRET,
                code: req.query.code,
                grant_type: 'authorazation_code',
                redirect_uri: `http://${req.headers.host}/auth/callback`
            };
            console.log('payload', payload);
            return axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, payload);
        };

        function exchangeAccessTokenForUserInfo(accessTokenResponse) {
            const accessToken = accessTokenResponse.data.access_token;
            console.log('accessToken', accessToken);
            const url = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo?access_token=${accessToken}`
            console.log('userinfo url', url)
            return axios.post(ul);
        }

        function storeUserInfoInDatabase(userInfoResponse) {
            const userData = userInfoResponse.data;
            console.log('userdata', userData);

            return req.app.get('db').get_user_by_id(userData.sub).then(users => {
                if (users.length){
                    const user = users[0];
                    req.session.user = user;
                    res.redirect('/cool-couches');
                } else {
                    return req.app.get('db').create_user([
                        userData.sub,
                        userData.email,
                        userData.name,
                        userData.picture
                      ]).then(newUsers => {
                          const newUser = newUsers[0];
                          req.session.user = newUser;
                          res.redirect('/cool-couches')
                      }).catch(error => {
                        console.error('error inserting users into database', error);
                        res.status(500).send('An unexpected error has happened in the server')
                    });
                }
            })
        }
    }
}