import { CognitoUserPool } from "amazon-cognito-identity-js";


const UserPool = {
    UserPoolId: "",
    CLientId: "",
}

export default new CognitoUserPool(UserPool);