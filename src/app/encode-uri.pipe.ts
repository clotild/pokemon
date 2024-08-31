import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encodeURI',
})
export class EncodeURIPipe implements PipeTransform {
  transform(value: string): string {
    console.log('pipe', btoa(value));
    return btoa(value);
  }
}
