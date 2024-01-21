import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
})
export class CategoryPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'back-end':
        return 'computer';
      case 'front-end':
        return 'code';
      case 'data-base':
        return 'storage';
      default:
        return 'code';
    }
  }
}
