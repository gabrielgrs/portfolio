const { withAxiom } = require('next-axiom')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GITHUB_USER: process.env.GITHUB_USER,
    FORM_SUBMIT_ID: process.env.FORM_SUBMIT_ID,
  },
}

module.exports = withAxiom(nextConfig)
