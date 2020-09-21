import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const CodeEditor = ({ themeName, ...props }) => {
  const [theme, setTheme] = useState();

  useEffect(() => setTheme(themeName), [themeName]);

  return <CodeEditor {...{ ...props, theme }} title='Mokka - Minimal Dark Theme' />;
};

CodeEditor.propTypes = {
  themeName: PropTypes.string,
};

CodeEditor.defaultProps = {
  themeName: 'Mokka',
};
