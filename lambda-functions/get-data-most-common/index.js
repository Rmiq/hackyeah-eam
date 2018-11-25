const mysql = require('mysql');
const config = {
    host                : 'hackyeah-dbinstance.cajqykj0vlgp.eu-central-1.rds.amazonaws.com',
    user                : 'root',
    password            : 'admin123',
    port                : '3306',
    database            : 'innodb',
    debug               : false,
    multipleStatements  : true
};

class Database {
    constructor( config ) {
        this.connection = mysql.createConnection( config );
    }
    query( sql, args ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }
    close() {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
        } );
    }
}

exports.handler = (event, context, callback) => {
    const database = new Database(config);
    let response = {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*"
        },
        "isBase64Encoded": false
    };
    
    let query = `SELECT ${event.query.criteria} as name, Count(*) as value FROM records GROUP BY ${event.query.criteria} Order by value desc`;
    Array.from(query);

    //context.succeed(event.query);
    

    database.query(query).then(rows => {
        console.log(rows);
        response.query = rows;
        return database.close();
    }).then(() => {
        context.succeed(response);
    }).catch(err => {
        console.log(err);
        return database.close().then((err) => {
            context.fail(err);
        });
    });
};