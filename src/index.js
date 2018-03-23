import React from 'react'
import ReactDOM from 'react-dom'
import Publisher from './components/hello'
import './css/index.css'
import './css/innnn.scss'

ReactDOM.render(
	<div>
		<h1>Hello, world!</h1>
		<Publisher />
		<div className="flex">flex</div>
	</div>,
	document.getElementById('entry')
)
