import path from 'path'
import VStarter from 'vstarter'

VStarter({
  dist:'./www/',

  alias: {
    'components': path.resolve(__dirname, './src/components'),
    'statics': path.resolve(__dirname, './src/statics')
  }
})
