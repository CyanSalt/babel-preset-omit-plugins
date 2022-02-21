function loadPresetOrPlugin(presetOrPlugin) {
  let mod
  let options
  if (Array.isArray(presetOrPlugin)) {
    mod = presetOrPlugin[0]
    options = presetOrPlugin[1]
  } else {
    mod = presetOrPlugin
  }
  if (typeof mod === 'string') {
    mod = require(mod)
  }
  return [mod, options]
}

function omitPlugin(config, plugin) {
  config = { ...config }
  if (config.plugins) {
    config.plugins = config.plugins.filter(item => {
      const [pluginModule] = loadPresetOrPlugin(item)
      return pluginModule !== require(plugin)
    })
  }
  if (config.overrides) {
    config.overrides = config.overrides.map(rule => omitPlugin(rule, plugin))
  }
  return config
}

module.exports = (context, { preset, plugins } = {}) => {
  const [presetModule, presetOptions] = loadPresetOrPlugin(preset)
  let presetConfig = presetModule(context, presetOptions)
  for (const plugin of plugins) {
    presetConfig = omitPlugin(presetConfig, plugin)
  }
  return presetConfig
}
