module.exports = {
//  context: __dirname + "js"	
// entry: "/js/components/app.js",
  output: {
    filename: "bundle.js",
	path: __dirname + 'src/main/resources/static/',
  },


module: {
  loaders: [
    {
      test: /\.js?$/,
      exclude: /node_modules/,
      loaders: ["babel-loader","jsx-loader?insertPragma=React.DOM&harmony"],
    },
      { test: /\.css$/, loader: "style-loader!css-loader" },
    {
      test: /\.json$/,
      use: 'json-loader'
    }
      ],
}

}