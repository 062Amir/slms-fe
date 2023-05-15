import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { apiResourses } from 'src/app/app.constants';
import { IDepartment } from '../interfaces/department.interface';
import { IDepartmentFilters } from '../interfaces/filter.interface';
import { IListResponse } from '../interfaces/response.interface';
import { UtilService } from './util.service';

@Injectable()
export class DepartmentService {
  constructor(private http: HttpClient, private utilSvc: UtilService) {}

  async getDepartments(filters?: IDepartmentFilters) {
    return await lastValueFrom(this.http.get<IListResponse>(apiResourses.department, this.utilSvc.getHttpOptions(filters)));
  }

  async addDepartment(payload: any): Promise<IDepartment> {
    return await lastValueFrom(this.http.post<IDepartment>(apiResourses.department, payload, this.utilSvc.getHttpOptions()));
  }

  async updateDepartment(id: string, payload: any): Promise<IDepartment> {
    return await lastValueFrom(this.http.put<IDepartment>(`${apiResourses.department}/${id}`, payload, this.utilSvc.getHttpOptions()));
  }

  async deleteDepartment(id: string): Promise<boolean> {
    await lastValueFrom(this.http.delete<any>(`${apiResourses.department}/${id}`));
    return true;
  }
}
