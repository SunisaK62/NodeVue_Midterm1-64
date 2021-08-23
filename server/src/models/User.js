module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        source: DataTypes.STRING,
        benefit: DataTypes.STRING,
        reaction: DataTypes.STRING,
        type: DataTypes.STRING
    })

    User.prototype.comparePassword = function (password) {
        if (password == this.password) {
            return true
        }
        return false
    }

    User.associate = function (models) { }
    
    return User;
}