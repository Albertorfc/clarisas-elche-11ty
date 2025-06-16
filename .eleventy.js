module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("imagenes");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site"
    }
  };
};
