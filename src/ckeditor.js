/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import uploadIcon from './uploadIcon.svg';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class ClassicEditor extends ClassicEditorBase { }

class ThrowUploadEventButton extends Plugin {
	init() {
		const editor = this.editor

		editor.ui.componentFactory.add("uploadFile", locale => {
			const view = new ButtonView(locale)

			view.set({
				label: "Upload file",
				icon: uploadIcon
			})

			view.on('execute', () => {
				window.dispatchEvent(new Event("ckeditor-call-upload"))
			})

			return view
		})
	}
}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	Indent,
	Link,
	List,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	ThrowUploadEventButton
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'bold',
			'italic',
			'link',
			'numberedList',
			'|',
			'blockQuote',
			'insertTable',
			'|',
			'uploadFile'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	language: 'en'
};
