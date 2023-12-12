import { Component } from '@angular/core';
import { Table } from '../table';
import { TableService } from '../table.service';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})
export class TablesComponent {
  Table: Table[] = [];
  TableForm: Table = { id: '', marque: '', description: '', dateConstruction: '' };

  constructor(private tableService: TableService) { }

  ngOnInit(): void {
    this.getTables();
  }

  getTables() {
    this.tableService.getTables().subscribe((data: Table[]) => {
      this.Table = data;
    });
  }

  addTable() {
    console.log("added table ")
    this.tableService.addTable(this.TableForm).subscribe(() => {
      this.getTables();
    });
  }



}


