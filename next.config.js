const { withAxiom } = require('next-axiom')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    RESEND_KEY: process.env.RESEND_KEY,
    GITHUB_USER: process.env.GITHUB_USER,
  },
}

module.exports = withAxiom(nextConfig)
