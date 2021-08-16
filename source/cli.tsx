#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './ui';

const cli = meow(
	`
	Usage
	  $ rotate-pat

	Options
		--name  Your name

	Examples
	  $ rotate-pat --name=Jane
	  Hello, Jane
`,
	{
		flags: {
			name: {
				type: 'string',
			},
		},
		importMeta: import.meta,
	},
);

render(<App name={cli.flags.name}/>);
