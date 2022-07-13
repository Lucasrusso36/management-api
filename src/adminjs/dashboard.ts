import AdminJS, { PageHandler } from "adminjs"
import { Category, Product } from "../models"

export const dashboardOptions: {
    handler?: PageHandler
    component?: string
} = {
  component: AdminJS.bundle('../adminjs/components/Dashboard'),
  handler: async (req, res, context) => {
    const categories = await Category.count()
    const products = await Product.count()

    res.json({
      'Products': products,
      'Categories': categories
    })
  }
}