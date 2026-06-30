export interface LoanFormData {
  name: string;
  age: number;
  phoneNumber: string;
  student: boolean;

  // the salary can be one of these strings only
  salary: "Less than 500$" | "Between 500$ and 1000$" | "More than 1000$";
}