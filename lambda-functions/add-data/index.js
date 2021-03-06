const mysql = require('mysql');
const randomstring = require("randomstring");
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
    console.log(event);
    const token = randomstring.generate(30);
    const query = `INSERT INTO records (przypadek,wojewodztwo,benefit,userStreetNum,userStreet,userCity,ip,isFinalized,validationToken,preferences,userLat, userLong) VALUES ('${event.body.case}', '${event.body.province}', '${event.body.benefit}','${event.body.place}','${event.body.street}','${event.body.locality}','${event.sourceIp}','false','${token}','${event.body.preferences}','${event.body.userLat}','${event.body.userLng}')`;
    let response = {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*"
        },
        "isBase64Encoded": false,
        "token" : token
    };
    database.query(query).then(rows => {
        response.body = JSON.stringify(rows);
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