import AdminJs from 'adminjs'
import AdminJsExpress from '@adminjs/express'
import AdminJsSequelize from '@adminjs/sequelize'
import { sequelize } from '../database';
import { adminJsResources } from './resources'

AdminJs.registerAdapter(AdminJsSequelize)

export const adminJs = new AdminJs({
  databases: [sequelize],
  rootPath: '/admin',
			resources: adminJsResources,
	branding: {
    companyName: 'SteekTech',
    logo: '/steektech.svg',
    theme: {
      colors: {
        primary100: '#041562',
	      primary80: '#88A2C7',
	      primary60: '#041562',
	      primary40: '#041562',
		    primary20: '#88A2C7',
	      grey100: '#463F57',
	      grey80: '#333333',
	      grey60: '#4d4d4d',
	      grey40: '#666666',
	      grey20: '#dddddd',
	      filterBg: '#463f57',
	      accent: '#da1212',
	      hoverBg: '#da1212',
      }
    }
  }
})

export const adminJsRouter = AdminJsExpress.buildRouter(adminJs)