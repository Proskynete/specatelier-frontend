/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '@Assets/images/logo.png';

const NavBar = () => (
	<nav className="navbar">
		<div className="navbar__inner">
			<div className="navbar__inner__logo-content">
				<img
					className="navbar__inner__logo-content__image"
					src={LOGO}
					alt="Logotipo de SpecAtelier"
				/>
			</div>

			<ul className="navbar__inner__section">
				<li className="navbar__inner__section__item">
					<Link to="/productos" className="navbar__inner__section__item__link">
						Productos
					</Link>
				</li>
				<li className="navbar__inner__section__item">
					<Link to="/marcas" className="navbar__inner__section__item__link">
						Marcas
					</Link>
				</li>
			</ul>
		</div>
	</nav>
);

export default NavBar;
