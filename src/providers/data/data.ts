import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataProvider {
  constructor(public storage: Storage){

  }

  getData(): Promise<any> {
    return this.storage.get('checklists');  
  }

  save(data): void {

    let saveData = [];

    //Remove observables
    data.forEach((checklist) => {
      saveData.push({
        title: checklist.title,
        items: checklist.items
      });
    });

    let newData = JSON.stringify(saveData);
    this.storage.set('checklists', newData);
  }
}
