import { post } from "../app/apiManager";

class NewService {
  static async registerUser({ email, name, password }) {
    const response = await post({
      path: "user/registration",
      requestBody: {
        email,
        name,
        password,
      },
    });
    return response;
  }

  static async login({ email, password }) {
    const response = await post({
      path: "user/login",
      requestBody: {
        email,
        password,
      },
    });
  }
}

export default NewService;
