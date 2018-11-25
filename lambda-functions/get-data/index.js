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
    var filters = [];
    var values = [];
    for (var key in event.query) {
        if (event.query.hasOwnProperty(key)) {
            filters.push(key);
            values.push(event.query[key]);
        }
    };
    let filtersAdd = "";
    for (let i = 0 ; i < filters.length; i++){
        if( i == 0){
            filtersAdd += "WHERE ";
        }
        if(i+1 ==filters.length){
            filtersAdd +=`${filters[i]} = "${values[i]}"`;
        } else{
            filtersAdd += `${filters[i]} = "${values[i]}" AND `;
        }
    }
    
    const query = `SELECT * FROM records ${filtersAdd}`;

    //context.succeed(event.query);
    

    database.query(query).then(rows => {
        response.query = JSON.stringify(rows);
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
