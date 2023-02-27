import { useForm } from "react-hook-form";

function FirstForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <label>defaultName</label>
        </div>
        <input defaultValue="vivek" {...register("Name")} />
      </div>
      <div>
        <div>
          <label>FullName</label>
        </div>
        <input
          placeholder="Enter FullName"
          {...register("exampleRequired", { required: true })}
        />
        <div>
          {errors.exampleRequired && (
            <span style={{ color: "red", fontSize: "13px" }}>
              This field is required
            </span>
          )}
        </div>
      </div>
      <div>
        <div>
          <label>FirstName</label>
        </div>
        <input {...register("firstName")} />
      </div>
      <div>
        <div>
          <label>Select Gender</label>
        </div>
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
      </div>
      <div>
        <div>
          <div>
            <label>Name with maxLength: 20 </label>
          </div>
          <input
            {...register("firstName", { required: true, maxLength: 20 })}
          />
        </div>
        <div>
          <div>
            <label>lastName with pattern: /^[A-Za-z]+$/i </label>
          </div>
          <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        </div>
        <div>
          <div>
            <label>Age withIn 18 to 99</label>
          </div>
          <input placeholder="age" type="number" {...register("age", { min: 18, max: 99 })} />
        </div>
      </div>
      <input type="submit" />
    </form>
  );
}
export default FirstForm;
