import { Injectable } from '@angular/core';
import { environment } from './environnement';
import { Table } from './table';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TableService {

urlApi = environment.apiUrl

constructor(private http: HttpClient) { }

getTables() {
  return this.http.get<Table[]>(this.urlApi);
}



addTable(table: Table) {
  return this.http.post<Table>(this.urlApi, table);
}

updateTable(id: number, table: Table) {
  return this.http.put(`${this.urlApi}/${id}`, table);
}
deleteTable(id: number) {
  return this.http.delete(`${this.urlApi}/${id}`);
}
}