import Cookies from "js-cookie";

type LoginInputs = {
  email: string;
  password: string;
};

type LoginResponse = {
  code: number;
  data: any;
  title: string;
  type: string;
  message: string;
};

type SignupInputs = {
  identity: string;
};

type SignupResponse = {
  code: number;
  title: string;
  type: string;
  message: string;
};

type VerifyPinInputs = {
  identity: string;
  verification_pin: string;
};

type VerifyPinResponse = {
  code: number;
  title: string;
  type: string;
  message: string;
  data: string;
};

type UpdateUserDetailInputs = {
  name: string;
  password: string;
  phone_number: string;
  email: string;
  token: string;
};

type UpdateUserDetailResponse = {
  code: number;
  title: string;
  type: string;
  message: string;
  token: string;
};

type MeResponse = {
  code: number;
  data?: any;
  title: string;
  type: string;
  message: string;
};

export const login = async ({ email, password }: LoginInputs) => {
  const data = {
    username: email,
    password,
  };

  const res = await fetch(`${process.env.REACT_APP_AUTH_SERVICE_API}/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw await res.json();
  }

  const json: LoginResponse = await res.json();

  if (json.type !== "success") {
    throw new Error(json.message);
  }

  Cookies.set("accessToken", json?.data?.token);
  const userData = await me();
  return { ...json, user: userData.data };
};

export const signup = async ({ identity }: SignupInputs) => {
  const data = { identity, app: "icare" };

  const res = await fetch(
    `${process.env.REACT_APP_AUTH_SERVICE_API}/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    throw await res.json();
  }

  const json: SignupResponse = await res.json();

  if (json.type !== "success") {
    throw new Error(json.message);
  }

  return json;
};

export const verifyPin = async ({
  verification_pin,
  identity,
}: VerifyPinInputs) => {
  const data = { identity, verification_pin, app: "icare" };

  const res = await fetch(
    `${process.env.REACT_APP_AUTH_SERVICE_API}/register/verify`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    throw await res.json();
  }

  const json: VerifyPinResponse = await res.json();

  if (json.type !== "success") {
    throw new Error(json.message);
  }

  return json;
};

export const updateUserDetail = async ({
  email,
  name,
  password,
  phone_number,
  token,
}: UpdateUserDetailInputs) => {
  const data = { name, email, password, phone_number };

  const res = await fetch(
    `${process.env.REACT_APP_AUTH_SERVICE_API}/register/detail`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    throw await res.json();
  }

  const json: UpdateUserDetailResponse = await res.json();

  if (json.type !== "success") {
    throw new Error(json.message);
  }

  // Cookies.set("accessToken", json.token);

  return json;
};

export const logout = async () => {
  const res = await fetch(
    `${process.env.REACT_APP_AUTH_SERVICE_API}/auth/logout`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  if (!res.ok) {
    throw await res.json();
  }

  return await res.json();
};

export const me = async () => {
  const cookies = Cookies.get("accessToken");
  const res = await fetch(
    `${process.env.REACT_APP_USER_SERVICE_API}/user/token?column=id,name,phone_number,email,approved`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies}`,
      },
    }
  );
  const json: MeResponse = await res.json();

  if (!res.ok) {
    throw Error(json.message);
  }

  return json;
};
