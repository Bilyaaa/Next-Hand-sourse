import Form from '../components/Form'

function Login() {
  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
    },
  ];

  const initialData = {
    email: "",
    password: "",
  };

  const formProps = {
    initialData,
    url: "/login",
    inputs,
    submitLabel: "Login",
  };

  {
    return (
      <>
        <h3>Login</h3>
        <Form {...formProps} />
      </>
    );
  }
}

export default Login;
