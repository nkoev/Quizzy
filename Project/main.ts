#!/usr/bin/env node
// tslint:disable-next-line: no-import-side-effect
import 'reflect-metadata';

import { CLI } from './src/cli';
import { Injector } from './src/tools/ioc/injector';

async function bootstrap(): Promise<any> {
  const injector: Injector = new Injector();
  const app = injector.resolve(CLI);

  await app.main();
}

bootstrap();
