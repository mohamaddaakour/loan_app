```ts
// for every object or prop we must create an interface
// for it, to specify the properties data types
export interface NavbarProps {
    // ? means this field is optional
    title?: string;
}
```

```ts
// the salary can be one of these strings only
salary: "Less than 500$" | "Between 500$ and 1000$" | "More than 1000$";
```

```ts
// here we used generics because useState can take a state of any data type
// so in our case we the state is an object of LoanFormData interface data type
const [formData, setformData] = useState<LoanFormData>({ ... });
```

```ts
// I have always use an event as parameter to handle any type of inputs
// here we have a change event and the input type is a regular input element
const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    ...
};

// here we have a change event and we have a select element
const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    ...
};

// here we have a submit event and a form element
const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    // we use this to prevent the default behavior of submitting a button
    // because clicking the submit button will send all the data and remove it immediately and we
    // don't want that
    event.preventDefault();

    ...
};
```

```ts
export interface ModalProps {
  // if we are sending a function as a prop we have to
  // define it in the interface
  // here we are sending a function called onClose that
  // doesn't take parameters and return void (nothing)
  onClose: () => void;
}
```