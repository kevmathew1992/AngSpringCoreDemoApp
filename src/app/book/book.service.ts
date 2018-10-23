import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {Book} from './book';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment} from "../../environments/environment";




@Injectable()
export class BookService {

    constructor(private httpService: Http) {
        
    }
    private baseUrl = environment.baseSpringCoreUrl;

    getAllBookDetails(): Observable<Book[]> {

        return this.httpService.get(this.baseUrl+"fetchAllBooks")
        .pipe(map((response: Response) => response.json()));
    }

    saveBookDetails(book: Book){
        let body = JSON.stringify(book);
        let headers = new Headers({'Content-Type' : 'application/json'});
        let requestOptions = new RequestOptions({headers : headers});
        return this.httpService.post(this.baseUrl+"addBookDetails", body, requestOptions);
    }
}