/**
 * External dependencies
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import Card from 'components/card';
import SectionHeader from 'components/section-header';

class OrderActivityLog extends Component {
	static propTypes = {
		order: PropTypes.object,
	}

	render() {
		const { order, translate } = this.props;
		if ( ! order ) {
			return null;
		}

		return (
			<div className="order__activity-log">
				<SectionHeader label={ translate( 'Activity Log' ) } />
				<Card></Card>
			</div>
		);
	}
}

export default localize( OrderActivityLog );
