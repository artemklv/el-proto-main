import { render } from 'react-dom'
import React from 'react'
import Application from './components/Application.js'

console.log('hello');

export default function () {
  render(
    <Application />
    , document.getElementById("root")
  )
}
