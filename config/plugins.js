module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  'cloudinary-media-library': {
    enabled: true,
    config: {
      cloudName: env('CLOUDINARY_NAME'),
      apiKey: env('CLOUDINARY_KEY'),
      encryptionKey: env('CLOUDINARY_SECRET'),
    },
  },
  upload: {
    config: {
      provider: "local",
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
