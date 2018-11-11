import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //limit is how long th etruncated text should be
    const limit = args.length > 0 ? parseInt(args[0], 10) : 20;
    //the dots to show the truncation
    const trail = args.length > 1 ? args[1] : '...';
    //return substring based on limit or the value
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

}
