/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'dimexoi-basalt.s3.eu-west-3.amazonaws.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'ktlomlvatlgsodnl.public.blob.vercel-storage.com',
            port: '',
            pathname: '/**',
          },
        ],
      },

      experimental: {
        serverActions: true,
      },

}

module.exports = nextConfig
