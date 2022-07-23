import { useState } from "react";
import { createAuthUserWithEmailAndPassword ,createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.copmponent.style.scss'
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const resetFormFields=()=>{
    setFormFields(defaultFormFields)
  }
  const submitHandler = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Your password doesnot match");
      return;
    }
    try {
      const {user} = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user,{displayName})
      resetFormFields()
      console.log(user);
    } catch (error) {
      if(error.code==="auth/email-already-in-use"){
        alert('Cannot create account, Email already in use')
      }
      console.log(error.code);
    }
  };
  console.log(formFields);
  const handler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign__up__container">
      <h2>Don't have a account</h2>
      <span>Sign In With Your Email and Password</span>
      <form
        onSubmit={submitHandler}
      >
        <FormInput
          label={'Display Name'}
          type="string"
          required
          onChange={handler}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label={'Email'}
          type="email"
          required
          onChange={handler}
          name="email"
          value={email}
        />

        <FormInput
          label={'Password'}
          type="password"
          required
          onChange={handler}
          name="password"
          value={password}
        />

        <FormInput
          label={'Confirm Password'}
          type="password"
          required
          onChange={handler}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button buttonType='' type="submit">Sign-in</Button>
      </form>
    </div>
  );
};
export default SignUpForm;
