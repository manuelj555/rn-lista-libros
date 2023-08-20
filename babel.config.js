module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
      // 'react-native-reanimated/plugin' siempre de ultimo
      'react-native-reanimated/plugin',
    ],
  };
};
