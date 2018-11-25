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
        "isBase64Encoded": false,
        body: []
        
    };
    
    let query = `SELECT Count(*) as zapytania, wojewodztwo FROM records where isFinalized = 'false' GROUP BY wojewodztwo`;
    let query2 = `SELECT Count(*) as sfinalizowane, wojewodztwo FROM innodb.records where isFinalized = 'true' GROUP BY wojewodztwo`;

    //context.succeed(event.query);
    

    database.query(query).then(rows => {
        rows.forEach((row)=>{
            response.body.push(row);
        });
        return database.query(query2);
        
    }).then((rows2) => {    
        rows2.forEach((row,i)=>{
            let finded = false;
            response.body.forEach((existingRow)=>{
                if(row.wojewodztwo == existingRow.wojewodztwo){
                    console.log(row.sfinalizowane);
                    existingRow.sfinalizowane = row.sfinalizowane;
                    finded = true;
                } else if(finded) {
                    console.log(finded);
                     existingRow.sfinalizowane = 0;
                }
            })
        })
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