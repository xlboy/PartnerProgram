import { Provider } from 'react-redux'
import { createApp } from './utils/dva'
import models from './store'
import 'taro-ui/dist/style/index.scss'
import './app.scss'
import './static/iconfont/iconfont.scss'
import React from 'react'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const app = createApp({
  initialState: {},
  models,
})
const store = app.getStore()

const App: React.FC = props => <Provider store={store}>{props.children}</Provider>

export default App
