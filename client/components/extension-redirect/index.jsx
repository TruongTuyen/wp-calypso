/**
 * External dependencies
 */
import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * Internal dependencies
 */
import { getStatusForPlugin } from 'state/plugins/installed/selectors';
import QueryJetpackPlugins from 'components/data/query-jetpack-plugins';

class ExtensionRedirect extends Component {
	render() {
		console.log( 'pluginStatus', this.props.pluginStatus );
		return (
			<QueryJetpackPlugins siteIds={ [ this.props.siteId ] } />
		); // QC!
	}
}

export default connect(
	( state, { siteId } ) => ( {
		pluginStatus: getStatusForPlugin( state, siteId, 'wp-super-cache' ),
	} )
)( ExtensionRedirect );
