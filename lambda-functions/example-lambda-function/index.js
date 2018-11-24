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

exports.handler = (event, context) => {
    const database = new Database(config);
    const query1 = `SELECT * FROM users`;
    const query2 = `SELECT pesel FROM users`;
    const responseBody = '';
    
    database.query(query1).then(rows => {
        if (rows != null) {
            return database.query(query2);
        }
        else {
            throw "Null";
        }
    }).then(response => {
        responseBody = response;
        return database.close();
    }).then(() => {
        context.succeed(responseBody);
    }).catch(err => {
        return database.close().then(() => {
            context.fail(null);
        });
    });
};