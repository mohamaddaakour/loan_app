```ts
// we use a state hook to handle the change of each element in this object
// each time anything changes in the object the whole component will be rendered
// formData is the state, setFormData is the function to edit the state
// useState will return an array first element is the state, second element
// is the function used to handle this state
const [formData, setformData] = useState<LoanFormData>({
    name: "",
    age: 0,
    phoneNumber: "",
    student: false,
    salary: "Less than 500$",
});
```

```ts
// setFormData is the function to edit the state
// this function can take a parameter and it's
// representing the old state
setformData(prev => ({
    ...prev,

    // we used [name] because the key of an object is not a string
    // so like that I am taking only what inside this string
    [name]: type === "checkbox" ? checked : value,
}));
```

```ts
// we use the memo hook to save the return of a function and not
// calling it every time the component re-render
// this function will be called agin only if one element in the dependency array changed
const validationMessage = useMemo(() => {
    const { name, age, phoneNumber, student } = formData;

    if (name.trim().length === 0) {
        return "Name is required";
    }

// this is the dependency array
}, [formData]);
```

```ts
// onClose expect a function so I have to put
// this line of code inside an anonymous function
onClose={() => setIsModalOpen(false)}
```

```ts
// here we are telling react that, when any change in this
// input happens execute this function
// we don't put it like that (handleSelectChange()) because like that
// react will execute the function directly even if nothing changed
onChange={handleSelectChange}
```

```tsx
// onSubmit mean when we click the submit button apply this function
<form onSubmit={handleSubmit}>
```