import path from 'path'

const swaggerConfig = {
  swaggerDefinition: {
    info: {
      title: 'API—DOCS',
      description: '举报oa系统接口文档',
      version: '1.0.0',
    },
    produces: [
      'application/json',
      'application/xml'
    ],
    schemes: ['http', 'https'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: '',
      }
    }
  },
  basedir: __dirname,
  files: [
    path.join(__dirname, '../routes/*.js')
  ]
}

export default function setSwagger(app){
  const expressSwagger = require('express-swagger-generator')(app)
  expressSwagger(swaggerConfig)
}