import type { Config } from 'tailwindcss';
import path from 'path';

const config: Config = {
  darkMode: 'class',
  content: [
    path.resolve(__dirname, '../../apps/qbair/**/*.{js,ts,jsx,tsx,mdx}'),
    path.resolve(__dirname, './components/**/*.{js,ts,jsx,tsx,mdx}'),
  ],
  theme: {},
};
export default config;
