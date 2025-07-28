import postcssPxToRem from 'postcss-pxtorem'

export default ({ erm}) => {
  const isProd = erm === 'production'
  const plugins = []
  if (isProd){
    plugins.push(
      postcssPxToRem({
        propList: ['*'],
        mediaQuery: true,
      })
    )
  }
  return {
    plugins,
  }
}