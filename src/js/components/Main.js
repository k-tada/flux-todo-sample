import React from 'react';
import CSSModules from 'react-css-modules';
import style from './Main.less';
import { Button } from 'react-bootstrap';
import Header from './Header';
import Contents from './Contents/Contents';

@CSSModules( style )
export default class Main extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div styleName="main">
        <div styleName="wrapper">
          <Header />
          <Contents />
        </div>
      </div>
    );
  }
}

