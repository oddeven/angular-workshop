import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charCount'
})
export class CharacterCountPipe implements PipeTransform {
  transform(value) {
    return `${value} (${value.length})`;
  }
}
