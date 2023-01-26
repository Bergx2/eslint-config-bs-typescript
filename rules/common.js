module.exports = {
  plugins: [
    "@typescript-eslint"
  ],
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-explicit-any": ["error"],
    "@typescript-eslint/explicit-function-return-type": ["error"]
  },
  overrides: [
    {
      "files": ["*.styled.ts"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": "off"
      }
    }
  ]
};
