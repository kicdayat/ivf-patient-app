import Cookies from "js-cookie";
import { useEffect, createContext, FC, useReducer, useContext } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

import {
  login as loginApi,
  // logout as logoutApi,
  // signup as signupApi,
  me,
} from "services/auth-service";

type User = {
  id: number;
  name: string;
  email: string;
  approved: boolean;
  phone_number: string;
};

type LoginProps = {
  email: string;
  password: string;
};

// type SignupProps = {
//   name: string;
//   email: string;
//   password: string;
// };

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isInitialized: boolean;
  login: ({ email, password }: LoginProps) => Promise<void>;
  // signup: ({ email, name, password }: SignupProps) => Promise<void>;
  logout: () => Promise<void>;
}

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

enum AuthActionKind {
  INITIALIZE = "INITIALIZE",
  LOGIN = "LOGIN",
  // SIGNUP = "SIGNUP",
  LOGOUT = "LOGOUT",
}

interface AuthAction {
  type: AuthActionKind;
  payload: {
    isAuthenticated: boolean;
    // isInitialized: boolean;
    user: User | null;
  };
}

interface AuthState {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: User | null;
}

const authReducer = (state: AuthState, action: AuthAction) => {
  const { type, payload } = action;
  const { isAuthenticated, user } = payload;

  switch (type) {
    case AuthActionKind.INITIALIZE:
      return {
        ...state,
        isAuthenticated,
        isInitialized: true,
        user,
      };
    case AuthActionKind.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user,
      };
    // case AuthActionKind.SIGNUP:
    //   return {
    //     ...state,
    //     isAuthenticated: true,
    //     user,
    //   };
    case AuthActionKind.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
  }
};

const AuthContext = createContext<AuthContextType>({
  ...initialState,
  login: ({ email, password }) => {},
  logout: () => {},
  // signup: ({ email, name, password }) => {},
} as AuthContextType);

export const AuthProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const data = await me();
        dispatch({
          type: AuthActionKind.INITIALIZE,
          payload: {
            isAuthenticated: true,
            user: data.data,
          },
        });
      } catch (error) {
        dispatch({
          type: AuthActionKind.INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };
    initialize();
  }, []);

  const login = async ({ email, password }: LoginProps) => {
    const data = await loginApi({ email, password });

    dispatch({
      type: AuthActionKind.LOGIN,
      payload: {
        user: data.user,
        isAuthenticated: true,
      },
    });
  };

  const logout = async () => {
    // await logoutApi();
    Cookies.remove("accessToken");
    dispatch({
      type: AuthActionKind.LOGOUT,
      payload: {
        isAuthenticated: false,
        user: null,
      },
    });
  };

  // const signup = async ({ email, name, password }: SignupProps) => {
  //   const data = await signupApi({ email, password, name });

  //   dispatch({
  //     type: AuthActionKind.SIGNUP,
  //     payload: {
  //       user: data.user,
  //       isAuthenticated: true,
  //     },
  //   });
  // };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
        // signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;

export const useAuth = () => {
  return useContext(AuthContext);
};
