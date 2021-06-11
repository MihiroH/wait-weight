module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/sass/_config.sass"
        `
      }
    }
  }
};