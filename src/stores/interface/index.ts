export type LayoutType = "vertical";

export type AssemblySizeType = "large" | "default" | "small";

export type LanguageType = "zh" | "en" | null;

/* GlobalState */
export interface GlobalState {
  layout: LayoutType;
  assemblySize: AssemblySizeType;
  language: LanguageType;
  maximize: boolean;
  primary: string;
  isDark: boolean;
  isGrey: boolean;
  isWeak: boolean;
  asideInverted: boolean;
  headerInverted: boolean;
  isCollapse: boolean;
  accordion: boolean;
  watermark: boolean;
  breadcrumb: boolean;
  breadcrumbIcon: boolean;
  tabs: boolean;
  tabsIcon: boolean;
  footer: boolean;
}

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
