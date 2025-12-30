export interface LoanFormData {
  name: string;
  phoneNumber: string;
  age: string;
  isEmployee: boolean;
  salary: string;
}

export interface ModalProps {
  isVisible: boolean;
  errorMessage: string | null;
  onClose: () => void;
}

export type SalaryRange = 'less than 500$' | 'between 500$ and 1500$' | 'more than 1500$';