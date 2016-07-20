import React from 'react';
import CSSModules from 'react-css-modules';
import style from './Header.less';

@CSSModules( style )
export default class Header extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div styleName="header">
        <p>React Todo Sample</p>
      </div>
    );
  }
}

