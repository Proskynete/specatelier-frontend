import React from 'react';
import PropTypes from 'prop-types';

const prettyLocationFormat = (city, country) =>
	`${city}, ${country.charAt(0).toUpperCase() + country.slice(1)}`;

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
				<p className="project__content__description">
					Tipo de proyecto:{' '}
					{project_type.charAt(0).toUpperCase() + project_type.slice(1)}
				</p>
				<p className="project__content__description">
					Fecha inicio: {delivery_date}
				</p>
				<p className="project__content__description">
					Última modificación: {updated_at}
				</p>
				<p className="project__content__description">
					Ubicación: {prettyLocationFormat(city, country)}
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
