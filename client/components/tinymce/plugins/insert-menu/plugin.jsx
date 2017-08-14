import React from 'react';
import ReactDOM from 'react-dom';
import tinymce from 'tinymce/tinymce';
import { renderToString } from 'react-dom/server';
import i18n from 'i18n-calypso';

import Gridicon from 'gridicons';

import menuItems from './menu-items';

const initialize = editor => {
	menuItems.forEach( item =>
		editor.addMenuItem( item.name, {
			classes: 'wpcom-insert-menu__menu-item',
			cmd: item.cmd,
			onPostRender() {
				this.innerHtml( renderToString( item.item ) );
			},
		} ),
	);

	editor.addButton( 'wpcom_insert_menu', {
		type: 'splitbutton',
		title: i18n.translate( 'Insert content' ),
		classes: 'btn wpcom-insert-menu insert-menu',
		cmd: menuItems[ 0 ].cmd,
		menu: menuItems.map( ( { name } ) => editor.menuItems[ name ] ),
		onPostRender() {
			ReactDOM.render( <Gridicon icon="add-outline" />, this.$el[ 0 ].children[ 0 ] );

			let initialTooltipLeftPos = 0;
			let initialTooltipTopPos = 0;

			let firstTooltipRender = false;

			// Listen to `mouseenter` events on the (+) part of the Inserter menu to show
			// the "Insert content" tooltip.
			this.$el[ 0 ].children[ 0 ].addEventListener( 'mouseenter', () => {
				// We need to select the tooltip during the `mouseenter` event and not outside.
				// Otherwise, Tinymce renders an empty tooltip somewhere in the editor.
				const btnTooltip = this.tooltip();

				btnTooltip.text( i18n.translate( 'Insert content' ) );

				if ( ! firstTooltipRender ) {
					initialTooltipLeftPos = parseInt( btnTooltip.$el[ 0 ].style.left );
					initialTooltipTopPos = parseInt( btnTooltip.$el[ 0 ].style.top );

					firstTooltipRender = true;
				}

				btnTooltip.moveTo( initialTooltipLeftPos - 10, initialTooltipTopPos );
			} );

			// Listen to `mouseenter` events on the (v) part of the Inserter menu to show
			// the "Insert special" tooltip.
			const insertSpecialEl = this.$el[ 0 ].children[ 1 ];

			insertSpecialEl.addEventListener( 'mouseenter', () => {
				// We need to select the tooltip during the `mouseenter` event and not outside.
				// Otherwise, Tinymce renders an empty tooltip somewhere in the editor.
				const btnTooltip = this.tooltip();

				btnTooltip.text( i18n.translate( 'Insert special' ) );

				if ( ! firstTooltipRender ) {
					initialTooltipLeftPos = parseInt( btnTooltip.$el[ 0 ].style.left );
					initialTooltipTopPos = parseInt( btnTooltip.$el[ 0 ].style.top );

					firstTooltipRender = true;
				}

				btnTooltip.moveTo( initialTooltipLeftPos + 24, initialTooltipTopPos );
			} );
		},
	} );
};

export default () => {
	tinymce.PluginManager.add( 'wpcom/insertmenu', initialize );
};
