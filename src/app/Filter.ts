import {Pipe, PipeTransform} from '@angular/core';
import {Coach} from './model/Coach';

@Pipe({name: 'appFilter'})
export class Filter implements PipeTransform {

  transform(coaches: Coach[], searchText: string): any[] {
    if (!coaches) {
      return [];
    }
    if (!searchText) {
      return coaches;
    }
    searchText = searchText.toLocaleLowerCase();

    return coaches.filter(coach => {
      const combinedUserInfoToSearch = `${coach.userInfo.firstName} ${coach.userInfo.lastName} ${coach.userInfo.email}`;
      return combinedUserInfoToSearch.toLocaleLowerCase().includes(searchText);
    });
  }
}
