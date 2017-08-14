/**
 * External Dependencies
 */
import React from 'react';
import i18n from 'i18n-calypso';

/**
 * Internal Dependencies
 */
import support from 'lib/url/support';

export default [
	{
		value: 'misspelled',
		label: i18n.translate( 'I misspelled the domain' ),
		helpMessage: i18n.translate(
			'If you misspelled the domain name you were attempting to purchase, it’s likely that others will as well, ' +
				'and you might want to consider keeping the misspelled domain.'
		),
	},
	{
		value: 'other_host',
		label: i18n.translate( 'I want to use the domain with another service or host' ),
		helpMessage: i18n.translate(
			'Canceling a domain name causes the domain to become unavailable for a brief period. ' +
				'Afterward, anyone can repurchase. If you wish to use the domain with another service, ' +
				'you’ll want to {{a}}update your name servers{{/a}} instead.',
			{
				components: {
					a: <a href={ support.UPDATE_NAMESERVERS } target="_blank" rel="noopener noreferrer" />,
				},
			}
		),
	},
	{
		value: 'transfer',
		label: i18n.translate( 'I want to transfer my domain to another registrar' ),
		helpMessage: i18n.translate(
			'Canceling a domain name causes the domain to become available for general purchase, possibly ' +
				'resulting in its loss. To transfer the domain, please {{a}}use our transfer out feature{{/a}} instead.',
			{
				components: {
					a: <a href={ support.TRANSFER_DOMAIN_REGISTRATION } target="_blank" rel="noopener noreferrer" />,
				},
			}
		),
	},
	{
		value: 'expectations',
		label: i18n.translate( 'The service isn’t what I expected' ),
		helpMessage: i18n.translate(
			'If you misspelled the domain name you were attempting to purchase, it’s likely that others will as well, ' +
				'and you might want to consider keeping the misspelled domain.'
		),
	},
	{
		value: 'wanted_free',
		label: i18n.translate( 'I meant to get a free blog' ),
		helpMessage: i18n.translate(
			'Please provide a brief description of your reasons for canceling:'
		),
		showTextarea: true,
	},
	{
		value: 'other',
		label: i18n.translate( 'Something not listed here' ),
		helpMessage: i18n.translate(
			'Please provide a brief description of your reasons for canceling:'
		),
		showTextarea: true,
	},
];
