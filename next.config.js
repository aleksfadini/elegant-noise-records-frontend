/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

module.exports = nextConfig;

// module.exports = nextConfig

// module.exports = {
//   reactStrictMode: true,
//   images: {
//     // loader: ({ src, width, quality }) => {
//     //   return `https://my-image-loader.com/${src}?w=${width}&q=${quality || 75}`;
//     // },
//     unoptimized: true,
//   },
//   output: {
//     // specify that you want to export your application statically
//     format: 'export',
//   },
// };
