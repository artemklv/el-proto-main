import './index.css'
import 'whatwg-fetch'
import 'babel-polyfill'
import { render } from 'react-dom'
import React from 'react'
import Application from './components/Application'

render(
  <Application />
  , document.getElementById("root")
)
