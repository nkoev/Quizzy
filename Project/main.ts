#!/usr/bin/env node

import 'reflect-metadata';

import { CLI } from './src/cli';

async function bootstrap(): Promise<any> {
  const app: CLI = new CLI();

  await app.main();
}

bootstrap();
