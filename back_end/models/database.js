const database=DBConnect=>{
//     CREATE TABLE IF NOT EXISTS mechanics(
//     name VARCHAR(255) NOT NULL,
//     shopname VARCHAR(255) NOT NULL,
//     phoneno1 VARCHAR(255) NOT NULL,
//     phoneno2 VARCHAR(255) NOT NULL,
//     address VARCHAR(255) NOT NULL,
//     bike BOOLEAN NOT NULL,
//     tractor BOOLEAN NOT NULL,
//     car BOOLEAN NOT NULL,
//     bus BOOLEAN NOT NULL,
//     vehicles BOOLEAN NOT NULL,
//     location VARCHAR(255) NOT NULL,
//     PRIMARY KEY (name)
// );
    const listAllMechanics=()=>{
        return new Promise((resolve,reject)=>{
            const sql=`SELECT * FROM mechanics`;
            DBConnect.query(sql, function (err, result) {
                if (err) {
                    reject(err)
                };
                resolve(result);
           });
        });
    };
    // list mechanic by location
    const listMechanicByLocation=location=>{
        return new Promise((resolve,reject)=>{
            const sql=`SELECT * FROM mechanics WHERE location = ${DBConnect.escape(location)}`;
            DBConnect.query(sql, function (err, result) {
                if (err) {
                    reject(err)
                };
                resolve(result);
           });
        });
    };
    // add mechanic
    const addMechanic=mechanic=>{
        return new Promise((resolve,reject)=>{
            const sql=`INSERT INTO mechanics(name, shopname, phoneno1, phoneno2, address, bike, tractor, car, bus, vehicles, location) VALUES(
                ${DBConnect.escape(mechanic.name)},
                ${DBConnect.escape(mechanic.shopname)},
                ${DBConnect.escape(mechanic.phoneno1)},
                ${DBConnect.escape(mechanic.phoneno2)},
                ${DBConnect.escape(mechanic.address)},
                ${DBConnect.escape(mechanic.bike)},
                ${DBConnect.escape(mechanic.tractor)},
                ${DBConnect.escape(mechanic.car)},
                ${DBConnect.escape(mechanic.bus)},
                ${DBConnect.escape(mechanic.vehicles)},
                ${DBConnect.escape(mechanic.location)}
            );`;
            DBConnect.query(sql, function (err, result) {
                if (err) {
                    reject(err)
                };
                resolve(result);
           });
        });
    };



    return{
        listAllMechanics,
        listMechanicByLocation,
        addMechanic
    }
}

module.exports=database;