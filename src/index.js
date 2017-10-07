import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from 'registerServiceWorker';

import TransitionGroup from 'react-transition-group/TransitionGroup';
import AnimatedSwitch from 'components/AnimatedSwitch';

import Home from 'pages/Home';

import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

import {
	customHistory,
} from 'api';

ReactDOM.render(
	<Router history={customHistory} basename="/ritbtcweb">
		<TransitionGroup>
			<AnimatedSwitch>
				<Route exact path="/" component={Home}/>
			</AnimatedSwitch>
		</TransitionGroup>
	</Router>
, document.getElementById('root'));
registerServiceWorker();
