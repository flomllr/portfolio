import React from 'react';
import '../style/Layout.css';

function Layout(props) {
  const { children } = props;
  return <div className="Layout">{children}</div>;
}
export default Layout;
