module.exports = {
  reactStrictMode: true,
  images: {
    loader: ({ src, width, quality }) => {
      return `https://my-image-loader.com/${src}?w=${width}&q=${quality || 75}`;
    },
    unoptimized: true,
  },
};
