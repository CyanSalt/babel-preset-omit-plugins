# babel-preset-omit-plugins

Omit certain plugins from a Babel preset.

**WARNING: This package is not yet stable. Please take special care before using it in a production environment.**

## Usage

```shell
npm install --save-dev babel-preset-omit-plugins
```

```js
// babel.config.js
module.exports = {
  presets: [
    ['babel-preset-omit-plugins', {
      preset: 'preset-module',
      plugins: [
        'plugin-module-1',
        'plugin-module-2',
        // ...
      ],
    }],
  ],
}
```

For example, if you are using the [Vue CLI](https://cli.vuejs.org/) and want to disable the [Decorators](https://babeljs.io/docs/en/babel-plugin-proposal-decorators), you can:

```js
// babel.config.js
module.exports = {
  presets: [
    ['babel-preset-omit-plugins', {
      preset: '@vue/cli-plugin-babel/preset',
      plugins: [
        '@babel/plugin-proposal-decorators',
      ],
    }],
  ],
}
```

If you need to provide options for the passed presets, you can use the array syntax of Babel configuration:

```js
// babel.config.js
module.exports = {
  presets: [
    ['babel-preset-omit-plugins', {
      preset: [
        '@vue/cli-plugin-babel/preset',
        {
          // For example only
          targets: { esmodules: true },
        },
      ],
      plugins: [
        '@babel/plugin-proposal-decorators',
      ],
    }],
  ],
}
```
