import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})

export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case "Back-end": return 'code';
      case "Front-end": return "code";
    }

    return "code";
  }

}
