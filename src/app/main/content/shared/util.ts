import { Injectable } from '@angular/core';

@Injectable()
export class Util {
    constructor() {
    }

    IsNullOrUndefined(value: any) {
        return (value === null || value === 'undefined' || value === undefined);
    }
}
