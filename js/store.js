const {combineReducers} = require('@mapstore/utils/PluginsUtils');
const {createDebugStore} = require('@mapstore/utils/DebugUtils');

module.exports = (plugins) => {
  const allReducers = combineReducers(plugins, {
     ...
  });
  return createDebugStore(allReducers, {});
};