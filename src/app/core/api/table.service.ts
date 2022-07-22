import {Injectable} from "@angular/core";
import {BaseApiClient} from "./base-api-client";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class TableService extends BaseApiClient{

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getTableInfo(): Observable<any> {
    return this.get('http://jsonplaceholder.typicode.com/users');
  }
}
