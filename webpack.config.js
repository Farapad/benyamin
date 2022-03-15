module.exports = {
    mode: 'production',
    optimization: {
        nodeEnv: 'production',
        minimize: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  },
  sourceMap: false // changed from `true`
}),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
};
