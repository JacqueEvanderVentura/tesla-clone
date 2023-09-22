module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"standard-with-typescript",
		"plugin:react/recommended",
		"eslint-config-prettier",
	],
	overrides: [
		{
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		"react/react-in-jsx-scope": 0,
		"@typescript-eslint/semi": 0,
		"@typescript-eslint/space-before-function-paren": 0,
		"@typescript-eslint/consistent-type-imports": 0,
		"@typescript-eslint/quotes": 0,
		"@typescript-eslint/no-unused-expressions": 2,
	},
};
