/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    IMAGE_URL: process.env.IMAGE_URL,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  reactStrictMode: false,
};

export default nextConfig;
