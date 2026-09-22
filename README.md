# React + TypeScript + Vite

## Contact form email setup

The contact form posts to `/api/contact`, which uses Resend from a serverless function. Configure these deployment environment variables before enabling submissions:

- `RESEND_API_KEY`: a Resend API key
- `EMAIL_FROM`: a sender address or domain verified in Resend

The recipient is fixed in the server endpoint as `kishorsugam2006@gmail.com`, and visitor addresses are used only as `Reply-To`.

If the API responds with `401` and `API key is invalid`, replace `RESEND_API_KEY` with an active Resend API key and restart the development server. The `EMAIL_FROM` value must also be a sender or domain verified in the same Resend account.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
