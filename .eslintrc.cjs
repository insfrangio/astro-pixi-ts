module.exports = {
  plugins: [require.resolve("prettier-plugin-astro")],
  extends: ["plugin:astro/recommended"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      env: {
        node: true,
        "astro/astro": true,
        es2020: true,
      },
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
        sourceType: "module",
      },
      rules: {
        "prettier/prettier": "warn",
        "astro/no-conflict-set-directives": "error",
        "astro/no-unused-define-vars-in-style": "error",
      },
    },
    // ...
  ],
};
