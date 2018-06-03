import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/prism-light";
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import atomDark from 'react-syntax-highlighter/styles/prism/atom-dark';
import { css } from 'emotion';

registerLanguage('jsx', jsx);

const styles = css`
  width: 900px;
  margin: 0 auto !important;
`;

export default function CodeSnippet({ children }) {
  return (
    <SyntaxHighlighter
      className={styles}
      language="jsx"
      style={atomDark}
    >
      {children}
    </SyntaxHighlighter>
  )
}