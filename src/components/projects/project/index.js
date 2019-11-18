import React from 'react';
import PropTypes from 'prop-types';

const prettyLocationFormat = (city, country) => `${city}, ${country}`;

const Project = props => {
	const {
		name,
		project_type,
		delivery_date,
		updated_at,
		city,
		country,
	} = props;

	return (
		<article className="project">
			<div className="project__header">
				{/* <img src="" className="" alt={name} /> */}
				<p
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%',
						height: '100%',
						backgroundColor: '#f2f2f2',
					}}
				>
					Imagen {project_type}
				</p>
			</div>
			<div className="project__content">
				<p className="project__content__title">{name}</p>
				<p className="project__content__description">{project_type}</p>
				<p className="project__content__description">{delivery_date}</p>
				<p className="project__content__description">{updated_at}</p>
				<p className="project__content__description">
					{prettyLocationFormat(city, country)}
				</p>
			</div>
		</article>
	);
};

Project.propTypes = {
	name: PropTypes.string.isRequired,
	project_type: PropTypes.string.isRequired,
	delivery_date: PropTypes.string.isRequired,
	updated_at: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired,
	country: PropTypes.string.isRequired,
};

export default Project;