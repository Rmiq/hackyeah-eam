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
    // TODO implement
    
    const database = new Database(config);
    const query = `SELECT * FROM records`;
    const responseBody = '';
    
    database.query(query).then(response => {
        responseBody = response;
        console.log(responseBody);
        return database.close();
    }).then(() => {
        context.succeed(responseBody);
    }).catch(err => {
        return database.close().then(() => {
            context.fail(null);
        });
    });
    
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            key1: 'key1',
            key2: 'key2',
            key3: 'key3',
            key4: 'key4',
            key5: 'key5',
        }),
    };
    callback(null, response);
};
