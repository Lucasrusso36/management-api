import { ResourceWithOptions } from "adminjs";
import { Category, Product, User } from "../../models";
import { categoryResourceOptions } from "./category";
import { productResourceFeatures, ProductResourceOptions } from "./product";
import { userResourceOptions } from "./user";

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
  {
    resource: User,
    options: userResourceOptions
  }
]