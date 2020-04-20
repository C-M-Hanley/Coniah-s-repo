module.exports = {
    getHomePage: function (request, response) {
        let query = 'SELECT * FROM players ORDER BY id ASC';

        function queryCallback(error, result) {
            if (error) {
                return response.status(500).send(error);
            }

            let renderDate = {
                players: result
            }

            response.render('index', renderDate);
        }

         db.query(query, queryCallback);
    }
};


