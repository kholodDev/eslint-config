# ESLint config

## Review

Contains configs:
- JavaScript
- TypeScript

## Install

```console
$ npm i -D eslint babel-eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## Requirements

### Common 

`Node.js` version `>= 12.*`

### Typescript

```json
{
    "compilerOptions": {
        "sourceMap": true,
        "outDir": "dist",
        "noImplicitAny": true,
        "module": "es6",
        "target": "es6",
        "strict": true,
        "resolveJsonModule": true,
        "esModuleInterop": true,
    },
    "include": ["**/*.ts"],
    "exclude": [],
}
```

## NPM-script package.json

```json
{
    "scripts": {
        "eslint": "eslint src"
    }
}
```

## .eslintrc

```json
{
    "extends": ["eslint-config"]
}
```

