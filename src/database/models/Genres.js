module.exports = function(sequelize, dataTypes){
    let alias = "Genre"

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncremen: true
        },
        created_at:{
            type:  dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        name:{
            type: dataTypes.STRING
        },
        ranking:{
            type: dataTypes.INTEGER
        },
        active: {
            type: dataTypes.INTEGER
        },
        genre_id: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: "genres",
        timestamps: true
    };


    let genres = sequelize.define(alias, cols, config)
    return genres
}   
