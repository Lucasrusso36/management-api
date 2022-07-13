import { sequelize } from '../database'
import { DataTypes, Model, Optional } from 'sequelize'

export interface ProductAttributes {
  id: number
  name: string
  description: string
  price: string
  image: string
  categoryId: number
}

export interface ProductCreationAttributes
  extends Optional<ProductAttributes, 'id' | 'description' | 'price' > {}

export interface ProductInstance
  extends Model<ProductAttributes, ProductCreationAttributes>, ProductAttributes {}

export const Product = sequelize.define<ProductInstance, ProductAttributes>('products', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  price: {
    allowNull: false,
    type: DataTypes.STRING
  },
  image: {
    type: DataTypes.STRING,
  },
  categoryId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'categories', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  }
})