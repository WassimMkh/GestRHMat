import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelfileService {
  private EXCEL_EXTENSION = ".xlsx";
  constructor() { }

  saveToExcel() {

  }


}
