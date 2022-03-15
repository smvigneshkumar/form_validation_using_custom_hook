import "./styles.css";
import useInput from "./use-input";

export default function App() {
  const {
    enteredValue: enteredName,
    isTouched: isEnteredNameTouched,
    isValueValid: isNameValid,
    valueIsValid: isEnteredNameIsValid,
    onValueChangeHandler: onNameChangeHandler,
    onValueBlur: onNameBlurHandler,
    reset: resetEnteredName
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredLastName,
    isTouched: isEnteredLastNameTouched,
    isValueValid: isLastNameValid,
    valueIsValid: isEnteredLastNameIsValid,
    onValueChangeHandler: onLastNameChangeHandler,
    onValueBlur: onLastNameBlurHandler,
    reset: resetLastName
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredEmail,
    isTouched: isEnteredEmailTouched,
    isValueValid: isEmailValid,
    valueIsValid: isEnteredEmailIsValid,
    onValueChangeHandler: onEmailChangeHandler,
    onValueBlur: onEmailBlurHandler,
    reset: resetEmail
  } = useInput((value) => value.includes("@"));

  let isFormValid =
    isNameValid && isEmailValid && isLastNameValid ? true : false;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      isEnteredNameIsValid ||
      isEnteredEmailIsValid ||
      isEnteredLastNameIsValid
    ) {
      return;
    }
    console.log(enteredName);
    console.log(enteredLastName);
    console.log(enteredEmail);
    resetEnteredName();
    resetLastName();
    resetEmail();
  };

  const nameInputClasses =
    !isNameValid && isEnteredNameTouched
      ? "form-control invalid"
      : "form-control";

  const lastNameInputClasses =
    !isLastNameValid && isEnteredLastNameTouched
      ? "form-control invalid"
      : "form-control";

  const emailInputClasses =
    !isEmailValid && isEnteredEmailTouched
      ? "form-control invalid"
      : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={enteredName}
            onChange={onNameChangeHandler}
            onBlur={onNameBlurHandler}
          />
          {isEnteredNameIsValid && (
            <p className="error-text">First name is not valid</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={enteredLastName}
            onChange={onLastNameChangeHandler}
            onBlur={onLastNameBlurHandler}
          />
          {isEnteredLastNameIsValid && (
            <p className="error-text">Last name is not valid</p>
          )}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={enteredEmail}
            onChange={onEmailChangeHandler}
            onBlur={onEmailBlurHandler}
          />
          {isEnteredEmailIsValid && (
            <p className="error-text">Email is not valid</p>
          )}
        </div>
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
}
