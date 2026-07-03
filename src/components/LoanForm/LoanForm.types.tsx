export interface LoanFormData {
  name: string;
  age: number;
  phoneNumber: string;
  student: boolean;
  salary: "Less than 500$" | "Between 500$ and 1000$" | "More than 1000$";
}