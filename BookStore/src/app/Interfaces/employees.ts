import {Employees} from "src/app/Interfaces/employees"

export interface Employees{
    id: string;
    firstName: string;
    lastName: string;
    review: number;
    deliveryDate: Date;
};