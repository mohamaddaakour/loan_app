import { useState, useMemo } from "react";
import type { ChangeEvent, FormEvent } from "react";

import Modal from "../Modal/Modal";

interface formData {
  name: string;
  age: number;
  phoneNumber: string;
  student: boolean;
  salary: "Less than 500$" | "Between 500$ and 1000$" | "More than 1000$";
}

const LoanForm = () => {
  const [formData, setformData] = useState<formData>({
    name: "",
    age: 0,
    phoneNumber: "",
    student: false,
    salary: "Less than 500$",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (
  event: ChangeEvent<HTMLInputElement>
) => {
  const { name, type, value, checked } = event.target;

  setformData(prev => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));
};

const handleSelectChange = (
  event: ChangeEvent<HTMLSelectElement>
) => {
  const { name, value } = event.target;

  setformData(prev => ({
    ...prev,
    [name]: value,
  }));
};

  const validationMessage = useMemo(() => {
  const { name, age, phoneNumber, student } = formData;

  if (name.trim().length === 0) {
    return "Name is required";
  }

  if (age <= 0) {
    return "Age is required";
  }

  if (phoneNumber.trim().length === 0) {
    return "Phone number is required";
  }

  if (age < 18) {
    return "You must be at least 18 years old";
  }

  if (phoneNumber.length < 8) {
    return "Phone number must be at least 8 characters";
  }

  if (student) {
    return "Students are not eligible for a loan";
  }

  return "The form has been submitted successfully";
}, [formData]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Submitted:", formData);

    setIsModalOpen(true);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-semibold">
            Name:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            className="border rounded px-2 py-1"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="age" className="font-semibold">
            Age:
          </label>
          <input
            id="age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleInputChange}
            className="border rounded px-2 py-1"
            min={0}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phoneNumber" className="font-semibold">
            Phone Number:
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="border rounded px-2 py-1"
            required
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="student"
            name="student"
            checked={formData.student}
            onChange={handleInputChange}
          />
          <label htmlFor="student" className="font-semibold">
            Are you a student?
          </label>
        </div>

        <div className="flex flex-col">
          <label htmlFor="salary" className="font-semibold">
            Salary:
          </label>
          <select
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleSelectChange}
            className="border rounded px-2 py-1"
          >
            <option value="Less than 500$">Less than 500$</option>
            <option value="Between 500$ and 1000$">Between 500$ and 1000$</option>
            <option value="More than 1000$">More than 1000$</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-cyan-500 text-white py-2 rounded hover:bg-cyan-600 transition-colors"
        >
          Submit
        </button>
      </form>

      <Modal
        message={validationMessage}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default LoanForm;