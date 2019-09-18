import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';
import { setLocalStorage, getLocalStorage } from '../../services/localStorage';

import Project from '../blocks/Project';

import { Container } from './styles';

function ProjectsList({ limit, order, type, name }) {
  const [localProjects, setLocalProjects] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      if (!localProjects) {
        const response = await api.get('projects', {
          params: { limit, order },
        });
        setProjects(response.data);
      }
    }
    loadProjects();
  }, [limit, localProjects, order]);

  useEffect(() => {
    if (projects.length) {
      const localStore = {
        name: `@alex-madeira/PROJECTS/${name}`,
        value: projects,
        expiry: 24 * 60 * 60 * 1000,
      };
      setLocalStorage(localStore);
    }
  }, [name, projects]);

  useEffect(() => {
    const projectsList = getLocalStorage(`@alex-madeira/PROJECTS/${name}`);
    if (!projectsList) {
      setLocalProjects(false);
    } else {
      setProjects(projectsList);
    }
  }, [name]);

  return (
    <Container>
      {projects.map(project => (
        <Project item={project} key={project.id} type={type} />
      ))}
    </Container>
  );
}

ProjectsList.defaultProps = { limit: null, order: 'asc', type: 'simple' };
ProjectsList.propTypes = {
  limit: PropTypes.number,
  order: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default ProjectsList;
