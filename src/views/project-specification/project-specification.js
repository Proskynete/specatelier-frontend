import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '@Components/project-specification/sidebar';
import Products from '@Components/project-specification/products';

const ProjectSpecification = () => {
  const { selectedMenu, selectedSectionItemID } = useSelector(state => state.projectSpecification);

  return (
    <div className="project-specification">
      <section className="project-specification__header" />
      <section className="project-specification__content">
        <section className="project-specification__content--sidebar">
          <Sidebar />
        </section>
        <section className="project-specification__content--section">
          {selectedMenu && selectedSectionItemID && (
          <Products />
          )}
        </section>
      </section>
    </div>
  );
};

export default ProjectSpecification;
