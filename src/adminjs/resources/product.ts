import uploadFileFeature from "@adminjs/upload";
import { FeatureType, ResourceOptions } from "adminjs";
import path from "path";

export const ProductResourceOptions: ResourceOptions = {
  navigation: 'Management',
  editProperties: ['name', 'description', 'price', 'uploadImage', 'categoryId'],
  filterProperties: ['name', 'description', 'categoryId', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'name', 'categoryId'],
  showProperties: ['id', 'name', 'description', 'price', 'image', 'categoryId', 'createdAt', 'updatedAt']
}


export const productResourceFeatures: FeatureType[] = [
  uploadFileFeature({
    provider: {
      local: {
        bucket: path.join(__dirname, '../../../public')
      }
    },
    properties: {
      key: 'image',
      file: 'uploadImage'
    },
    uploadPath: (record, filename) => `image/product-${record.get('id')}/${filename}`
  })
]