const path = require('path');
const webpack = require('webpack');

module.exports = (storybookBaseConfig, configType) => {

    storybookBaseConfig.module.rules.push({
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
    });

    storybookBaseConfig.module.rules.push({
        test: /\.md$/,
        use: "raw-loader"
    });

    storybookBaseConfig.resolve.alias = {
        '@ciro-maciel/style-guide': path.join(__dirname, '../../src')
    };

    return storybookBaseConfig;
};