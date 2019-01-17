import {Injectable} from '@angular/core';

@Injectable()
export class JwtService {
    public readonly CURRENT_EMPLOYEE_STORAGE_KEY: string = 'CurrentEmployeeToken';

    public set(authToken: string) {
        localStorage.setItem(this.CURRENT_EMPLOYEE_STORAGE_KEY, authToken);
    }

    public get(): string | null {
        return localStorage.getItem(this.CURRENT_EMPLOYEE_STORAGE_KEY);
    }

    public clear() {
        localStorage.removeItem(this.CURRENT_EMPLOYEE_STORAGE_KEY);
    }
}
