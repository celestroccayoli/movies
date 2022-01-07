module.exports = function(sequelize, dataTypes){
    let alias = "Movie"

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncremen: true
        },
        title:{
            type: dataTypes.STRING
        },
        created_at:{
            type:  dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        rating:{
            type: dataTypes.DOUBLE
        },
        awards: {
            type: dataTypes.INTEGER
        }, 
        realese_date:{
            type:  dataTypes.DATE
        },
        length: {
            type:  dataTypes.INTEGER
        }
    };

    let config = {
        tableName: "genres",
        timestamps: true
    };


    let genres = sequelize.define(alias, cols, config)
    return genres
}   
