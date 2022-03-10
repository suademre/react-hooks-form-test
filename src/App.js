import { Controller, useForm } from "react-hook-form";
import Label from "./components/Label";
import "./styles.css";

export default function App() {
  const { control } = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  console.log("errors", errors);

  return (
    <div className="App">
      <h1>Welcome to React Hook Form</h1>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <label htmlFor="firstName">First Name: </label>
        {/* <input name="firstName" id="firstName" /> */}
        <input {...register("firstName", { required: "This is required" })} />
        <br />
        {errors.firstName && <p>{errors.firstName.message}</p>}

        <label htmlFor="lastName">Last Name: </label>
        <input
          {...register("lastName", {
            reguired: "This is required",
            minLength: { value: 4, message: "Min length should be min 4" }
          })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
        <br />
        <label htmlFor="age">Age: </label>
        <input type="number" {...register("age")} id="age" />
        <br />
        <br />
        <label htmlFor="gender">Gender:</label>
        <select {...register("gender")} name="gender" id="gender">
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <label htmlFor="child">How many Countries have you got?</label>
        <br />
        <input {...register("child")} value="1" type="radio" />
        <label>1</label>
        <input {...register("child")} value="2" type="radio" />
        <label>2</label>
        <input {...register("child")} value="3" type="radio" />
        <label>3</label>

        <br />
        <label htmlFor="developer">Are you developer</label>
        <input
          {...register("developer")}
          value="yes"
          name="developer"
          type="checkbox"
        />
        <br />
        <br />
        <input type="submit" />
      </form>
      <Label htmlFor="firstName" name="First Name" />
      <Controller
        control={control}
        name="test"
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState
        }) => (
          <input
            onBlur={onBlur} // notify when input is touched
            onChange={onChange} // send value to hook form
            checked={value}
            inputRef={ref}
          />
        )}
      />
    </div>
  );
}
