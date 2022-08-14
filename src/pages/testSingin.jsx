import { Amplify } from "aws-amplify";
import { Link } from "react-router-dom";
import NavBarLogo from "../components/NavBarLogo";
import Footer from "../components/Footer";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useTheme } from "@aws-amplify/ui-react";
import { View, Image, Heading, Button, Text } from "@aws-amplify/ui-react";

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="Netfilx Logo"
          src="../../public/img/Logo.png"
        />
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; All Rights Reserved
        </Text>
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Iniciar Sesión
        </Heading>
      );
    },
    Footer() {
      const { toResetPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toResetPassword}
            size="small"
            variation="link"
          >
            Reset Password
          </Button>
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Crear una nueva cuenta
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            Back to Sign In
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  SetupTOTP: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
};

const formFields = {
  signIn: {
    username: {
      labelHidden: false,
      placeholder: "Enter your email",
    },
  },
  signUp: {
    username:{
        labelHidden: false,
        placeholder: "Enter your email",
        label: "Email",
        isRequired: true,
        type: "email",
        order:1,
    },
    family_name:{
        labelHidden: false,
        placeholder: "Enter your last name",
        label: "Last Name",
        isRequired: true,
        order:3,
    },
    given_name:{
        labelHidden: false,
        placeholder: "Enter your first name",
        label: "First Name",
        isRequired: true,
        order:2,
    },
    phone_number:{
        labelHidden: false,
        placeholder: "Enter your phone number",
        label: "Phone Number",
        type: "tel",
        isRequired: true,
        order:4,
    },
    password: {
      labelHidden: false,
      label: "Password:",
      placeholder: "Enter your Password:",
      isRequired: true,
      order: 5,
    },
    confirm_password: {
      labelHidden: true,
      label: "Confirm Password:",
      isRequired: true,
      order: 6,
    },
  },
  forceNewPassword: {
    password: {
      labelHidden: false,
      placeholder: "Enter your Password:",
    },
  },
  resetPassword: {
    username: {
      labelHidden: false,
      placeholder: "Enter your email:",
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      labelHidden: false,
      placeholder: "Enter your Confirmation Code:",
      label: "New Label",
      isRequired: false,
    },
    confirm_password: {
      labelHidden: false,
      placeholder: "Enter your Password Please:",
    },
  },
  setupTOTP: {
    QR: {
      totpIssuer: "test issuer",
      totpUsername: "amplify_qr_test_user",
    },
    confirmation_code: {
      labelHidden: false,
      label: "New Label",
      placeholder: "Enter your Confirmation Code:",
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      labelHidden: false,
      label: "New Label",
      placeholder: "Enter your Confirmation Code:",
      isRequired: false,
    },
  },
};

export default function TestSingin() {
  return (
    <div className=" bg-black md:bg-[url('/img/ImgInicio.jpg')] bg-cover w-full h-full flex flex-col ">
      <div className="pt-3">
        <Link to="/">
          <NavBarLogo className="mx-[20px]" />
        </Link>
      </div>
      <main className="flex flex-col justify-center max-w-[640px] py-[50px]  md:bg-black/80 mx-auto mb-auto">
        <div className="px-0 mx-5 md:px-10">
          <div className="">
            <Authenticator socialProviders={['facebook', 'google']} formFields={formFields} components={components}>
              {({ signOut }) => <button onClick={signOut}>Sign out</button>}
            </Authenticator>
          </div>
          <div className="grid grid-cols-2 gap-2 my-5">
          </div>
          <h3 className="text-gray-500 font-sm">
            <Link to="/">olvide mi contraseña</Link>
          </h3>
          <a className="text-gray-500 text-sm font-medium py-3">
            Necesitas ayuda?
          </a>

          <div className="">
            <h3 className="text-gray-500 font-medium text-base">
              Primera vez en netflix?
              <Link to="/">Suscribete ahora</Link>
            </h3>
            <h3 className="text-gray-500 text-sm">
              Esta página está protegida por Google reCAPTCHA para comprobar que
              no eres un robot. <a className="text-blue-700">Mas info.</a>
            </h3>
          </div>
        </div>
      </main>
      <Footer estilo="bg-black/80" estiloSm={"bg-black"} />
    </div>
    /*<Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>*/
  );
}
