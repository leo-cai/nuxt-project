module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Sujor·书舟',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '书山有路勤为径，学海无涯苦作舟。' }
    ],
    script: [
      // { src: 'http://static.geetest.com/static/tools/gt.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: [
      '~/plugins/axios.js'
    ]
  },
  plugins: [
    '~/plugins/axios.js'
  ]
}
