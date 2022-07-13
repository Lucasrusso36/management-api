import { Sequelize } from "sequelize"

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'management_development',
    username: 'management',
    password: 'management',
    define: {
        underscored: true
    }
})