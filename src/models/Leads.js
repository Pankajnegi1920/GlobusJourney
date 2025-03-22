import { DataTypes } from 'sequelize';
import sequelize from '../../DBConnect.js';

const Leads = sequelize.define('Leads', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
}, {
    tableName: 'leads',
    timestamps: true,
});

Leads.sync({ alter: true }) // ⚠️ `alter: true` ensures updates without dropping data
    .then(() => console.log('✅ Leads table synced successfully!'))
    .catch(err => console.error('❌ Error syncing Leads table:', err));

export default Leads;