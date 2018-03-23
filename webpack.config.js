const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')

const cssLoaders = [
	{
		loader: 'style-loader',
		options: {
			sourceMap: true,
			hmr: true,
			publicPath: '/'
		}
	},
	{
		loader: 'css-loader',
		options: {
			url: false,
			hmr: true,
			sourceMap: true,
			publicPath: '/'
		}
	},
	{
		loader: 'postcss-loader',
		options: {
			hmr: true,
			publicPath: '/',
			plugins: loader => [require('autoprefixer')] //css3样式自动添加浏览器样式前缀，这个插件是基于postcss-loader插件的
		}
	},
	{
		loader: 'sass-loader',
		options: {
			hmr: true,
			publicPath: '/'
		}
	}
]

module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
		publicPath: '/'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'src'), //此处把文件路径指向开发目录的的根目录下main.html文件内容变化后可以在热加载的时候变化更新
		inline: true,
		progress: true,
		hot: true,
		port: 5000,
		watchContentBase: true,
		compress: true,
		historyApiFallback: {
			index: './src/mian.html'
		}
	},
	module: {
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				use: {
					loader: 'babel-loader'
				},
				include: path.resolve(__dirname, 'src')
				// exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: cssLoaders
			},
			{
				test: /\.css$/,
				use: cssLoaders.slice(0, 3)
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'fonts/[hash:8].[name].[ext]',
						publicPath: '/'
					}
				}
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						mimetype: 'image/png',
						limit: 8192,
						name: 'images/[hash:8].[name].[ext]',
						publicPath: '/'
					}
				}
			}
		]
	},

	resolve: {
		extensions: ['.js', '.css', 'scss', '.jsx'] //自动补全识别后缀
	},

	plugins: [
		new webpack.BannerPlugin('This file is created by zhangkai'),
		new HtmlWebpackPlugin({
			template: './src/main.html'
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common' // 指定公共 bundle 的名称。
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}
