import { ResourceOptions } from "adminjs";

export const ProductResourceOptions: ResourceOptions = {
  navigation: 'Management',
  editProperties: ['name', 'description', 'price', 'categoryId'],
  filterProperties: ['name', 'description', 'categoryId', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'name', 'categoryId'],
  showProperties: ['id', 'name', 'description', 'price', 'categoryId', 'createdAt', 'updatedAt']
}