/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
// // import colors from 'colors';

process.env.NODE_ENV = 'production';

console.log('Generating minified build..');


webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(err);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map((error) => console.log(error));
  }

  if (jsonStats.hasWarnings) {
    return jsonStats.warnings.map((warning) => console.log(warning));
  }

  console.log('Webpack stats', stats);

  return 0;
});
