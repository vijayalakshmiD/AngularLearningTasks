import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'filter'
  })
  export class FilterPipe implements PipeTransform {
      /* transform(item : any[],SearchText : any[]) : any {
        console.log(item);
      } */
      transform(items: any[], SearchText: string): any {
          console.log(items);
          console.log(SearchText);
          SearchText = SearchText.toLocaleLowerCase();
          return items.filter( it => {
            return it.toLocaleLowerCase().includes(SearchText);
          });
       }

  }