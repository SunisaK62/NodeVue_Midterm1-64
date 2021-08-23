module.exports = {
    port:8081,
    db:{
        database: process.env.DB_NAME || 'Silver',
        user: process.env.DB_User || 'root',
        password: process.env.DB_PASS || '',
        options:{
            dialect: process.env.DIALEC || 'sqlite',
            storage: './Silver.sqlite'
        },
    },
    authentication:{
        jwtSecret: 'nodejs vuejs'
    }
}