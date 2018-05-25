import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar';
import './app.sass'

const TemplateWrapper = ({ children }) => (
    <div>
      <Navbar />
      <div>{children()}</div>
    </div>
  )

  TemplateWrapper.propTypes = {
    children: PropTypes.func,
  }

export default TemplateWrapper