module.exports = function(sequelize, DataTypes) {
    var Book = sequelize.define("Book", {
        googleId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        authors: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pageCount: {
            type: DataTypes.STRING,
        },
        publishDate: {
            type: DataTypes.STRING
        },
    });

    return Book;
};