import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
})
export class CategoryPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'Back-end':
        return 'computer';
      case 'Front-end':
        return 'code';
      case 'Data-base':
        return 'storage';
      default:
        return 'code';
    }
  }
}
