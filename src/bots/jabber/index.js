// @flow

// $FlowFixMe
import config from '../../../app-config';

import type { Bot } from '../../bot';
import type { Config } from './config';

import JabberBot from './bot';
import client from './client';

const jabberConfig: Config = config.jabber;

const bot: Bot = new JabberBot(client, jabberConfig);

export default bot;
