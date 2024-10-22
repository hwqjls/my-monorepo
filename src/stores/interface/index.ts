export interface UserState {
  token: string;
  userInfo: { name: string };
}

export interface AuthState {
  routeName: string;
  authButtonList: {
    [key: string]: string[];
  };
  authMenuList: Menu.MenuOptions[];
}
