import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

export enum LoggingLevel {
  DEBUG,
  INFO,
  WARN,
  ERROR
}

@Injectable()
export class LogService {

  private debug_level = LoggingLevel.DEBUG;

  constructor() {
    // show only errors on production mode
    if (environment.production) {
      this.setLoggingLevel(LoggingLevel.ERROR);
    }
  }

  setLoggingLevel(level) {
    this.debug_level = level;
  }

  error(prefix: string, msg: any): void {
    if (this.debug_level > LoggingLevel.ERROR) {
      return;
    }

    if (msg !== null && typeof msg === 'object') {
      console.error('%cERROR' + '%c(' + prefix + ')',
        'color: white; background: red; font-weight: bold',
        'color: white; background: red; font-weight: normal');
      console.error(msg);
      return;
    }

    console.error('%cERROR' + '%c(' + prefix + ')%c - ' + msg,
      'color: white; background: red; font-weight: bold',
      'color: white; background: red; font-weight: normal',
      'color: black; background: none');
  }

  warn(prefix: string, msg: any): void {
    if (this.debug_level > LoggingLevel.WARN) {
      return;
    }

    if (msg !== null && typeof msg === 'object') {
      console.warn('%cWARNING' + '%c(' + prefix + ')',
        'color: white; background: #808000; font-weight: bold',
        'color: white; background: #808000; font-weight: normal');
      console.warn(msg);
      return;
    }

    console.warn('%cWARNING' + '%c(' + prefix + ')%c - ' + msg,
      'color: white; background: #808000; font-weight: bold',
      'color: white; background: #808000; font-weight: normal',
      'color: black; background: none');
  }

  info(prefix: string, msg: any): void {
    if (this.debug_level > LoggingLevel.INFO) {
      return;
    }

    if (msg !== null && typeof msg === 'object') {
      console.info('%cINFO' + '%c(' + prefix + ')',
        'color: white; background: #0010AF; font-weight: bold',
        'color: white; background: #0010AF; font-weight: normal');
      console.info(msg);
      return;
    }

    console.info('%cINFO' + '%c(' + prefix + ')%c - ' + msg,
      'color: white; background: #0010AF; font-weight: bold',
      'color: white; background: #0010AF; font-weight: normal',
      'color: black; background: none');
  }

  debug(prefix: string, msg: any): void {
    if (this.debug_level > LoggingLevel.DEBUG) {
      return;
    }

    if (msg !== null && typeof msg === 'object') {
      console.debug('%cDEBUG' + '%c(' + prefix + ')',
        'color: white; background: #047500; font-weight: bold',
        'color: white; background: #047500; font-weight: normal');
      console.debug(msg);
      return;
    }

    console.debug('%cDEBUG' + '%c(' + prefix + ')%c - ' + msg,
      'color: white; background: #047500; font-weight: bold',
      'color: white; background: #047500; font-weight: normal',
      'color: black; background: none');
  }
}
