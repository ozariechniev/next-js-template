const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames.join(' ')}`;

const config = {
  '*.{js,jsx,ts,tsx}': ['prettier --write', buildEslintCommand],
};

export default config;
