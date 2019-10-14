module.exports = {
  devServer: {
        proxy: { 
      '/api': { 
        target: 'http://localhost:3001/api',
        changeOrigin: true, 
        pathRewrite: { 
          '^/api': ''
        } 
      } 
    } 
  },
  outputDir: '../esc2k19Api/public',  
  
  "transpileDependencies": [
    "vuetify"
  ] 
}