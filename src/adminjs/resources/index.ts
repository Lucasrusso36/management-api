import { ResourceWithOptions } from "adminjs";
import { Category, Product } from "../../models";
import { categoryResourceOptions } from "./category";
import { productResourceFeatures, ProductResourceOptions } from "./product";

export const adminJsResources: ResourceWithOptions[] = [
  {
      resource: Category,
      options: categoryResourceOptions
  },

  {
    resource: Product,
    options: ProductResourceOptions,
    features: productResourceFeatures
},
]