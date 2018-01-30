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
        'react-style-boilerplate': path.join(__dirname, '../../../src')
    };

    return storybookBaseConfig;
};