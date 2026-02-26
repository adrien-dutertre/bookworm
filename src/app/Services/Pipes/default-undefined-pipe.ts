import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultUndefinedPipe',
})
export class DefaultUndefinedPipe implements PipeTransform {

  transform(value: any, defaultValue: string): any {
    return value === undefined || value === null ? defaultValue : value;
  }

}
