import { Observable } from 'rxjs';

export interface BaseService<T> {
    getAll(): Observable<T[]>;
    deleteById(id: number);
    save(entity: T): Observable<T>;
}
