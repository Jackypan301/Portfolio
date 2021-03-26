import React from 'react'
import '../../styles/Projects.css'
import ProjectSlider from '../ProjectSlider.js';
import { ProjectInfo  } from '../ProjectInfo.js';

export default function Project () {
  return <ProjectSlider slides={ProjectInfo} />;
}

