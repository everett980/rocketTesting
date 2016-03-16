'use strict';

import React            from 'react';
import {Link}           from 'react-router';
import DocumentTitle    from 'react-document-title';

const propTypes = {
  currentUser: React.PropTypes.object
};

class Shit extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
			<div>
				<p>Suck it</p>
				<p>I made things happen</p>
			</div>
    );
  }

}

Shit.propTypes = propTypes;

export default Shit;
