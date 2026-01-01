import { useState } from 'react';
import Modal from './Modal';
import type { LoanFormData, SalaryRange } from '../types';

// events
import type { ChangeEvent, FormEvent } from 'react';

const SALARY_OPTIONS: SalaryRange[] = [
  'less than 500$',
  'between 500$ and 1500$',
  'more than 1500$'
];

const LoanForm = () => {
  const [formData, setFormData] = useState<LoanFormData>({
    name: '',
    phoneNumber: '',
    age: '',
    isEmployee: false,
    salary: ''
  });

  const [showModal, setShowModal] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = event.target as HTMLInputElement;
    const { name, value, checked, type } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = (): string | null => {
    const age = parseInt(formData.age);
    const phoneNumber = formData.phoneNumber.replace(/\D/g, '');

    if (age < 18 || isNaN(age)) {
      return 'You must be at least 18 years old to apply';
    }

    if (phoneNumber.length < 10) {
      return 'Phone number must be at least 10 digits';
    }

    return null;
  };

  const isFormValid = Boolean(
    formData.name &&
    formData.phoneNumber &&
    formData.age
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const validationError = validateForm();
    
    if (validationError) {
      setErrorMessage(validationError);
    } else {
      setErrorMessage(null);
      console.log('Form submitted successfully:', formData);
    }
    
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Loan Application
            </h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label 
              htmlFor="phoneNumber" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="(123) 456-7890"
            />
          </div>

          <div>
            <label 
              htmlFor="age" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Age
            </label>
            <input
              id="age"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="18"
              min="18"
              max="100"
            />
          </div>

          <div className="flex items-center">
            <input
              id="isEmployee"
              type="checkbox"
              name="isEmployee"
              checked={formData.isEmployee}
              onChange={handleInputChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label 
              htmlFor="isEmployee" 
              className="ml-2 text-sm font-medium text-gray-700"
            >
              I am currently employed
            </label>
          </div>

          <div>
            <label 
              htmlFor="salary" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Monthly Salary
            </label>
            <select
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              {SALARY_OPTIONS.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 ${
              isFormValid
                ? 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Submit Application
          </button>
        </form>
      </div>

      <Modal
        isVisible={showModal}
        errorMessage={errorMessage}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default LoanForm;