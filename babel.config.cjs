module.exports = {
    presets: [
        ["@babel/preset-env", { modules: 'auto', targets: { browsers: "defaults" } }],
        ["@babel/preset-react", { runtime: "automatic" }],
        '@babel/preset-flow'
    ],
};