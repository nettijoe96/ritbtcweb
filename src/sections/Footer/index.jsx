import React from 'react'

import './index.css';

export default class Footer extends React.Component {
	render () {
		return (
			<footer className="Footer" id="Copyright">
				<p>
					<a rel="license" href="https://www.gnu.org/licenses/gpl-3.0.html" id="LicenseLogoAnchor">
						<img src="https://www.gnu.org/graphics/gplv3-88x31.png" className="LicenseLogo" alt="GPLv3" />
					</a>
					This work is licensed under a <a rel="license" href="https://www.gnu.org/licenses/gpl-3.0.html">GNU General Public License</a>
			</p>
		</footer>
		)
	}
}
