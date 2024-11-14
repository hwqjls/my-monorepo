import { Theme } from "./interface";
import { DEFAULT_PRIMARY } from "@/config";
import { getLightColor } from "@/utils/color";
import { menuTheme } from "@/styles/theme/menu";
import { asideTheme } from "@/styles/theme/aside";
import { headerTheme } from "@/styles/theme/header";

/**
 * @description 全局主题 hooks
 * */
export const useTheme = () => {
  // 设置菜单样式
  const setMenuTheme = () => {
    let type: Theme.ThemeType = "light";
    const theme = menuTheme[type!];
    for (const [key, value] of Object.entries(theme)) {
      document.documentElement.style.setProperty(key, value);
    }
  };

  // 设置侧边栏样式
  const setAsideTheme = () => {
    let type: Theme.ThemeType = "light";
    const theme = asideTheme[type!];
    for (const [key, value] of Object.entries(theme)) {
      document.documentElement.style.setProperty(key, value);
    }
    setMenuTheme();
  };

  // 设置头部样式
  const setHeaderTheme = () => {
    let type: Theme.ThemeType = "light";
    const theme = headerTheme[type!];
    for (const [key, value] of Object.entries(theme)) {
      document.documentElement.style.setProperty(key, value);
    }
    setMenuTheme();
  };

  const initTheme = () => {
    // 设置主题色，以及相近色阶
    document.documentElement.style.setProperty("--el-color-primary", DEFAULT_PRIMARY);
    for (let i = 1; i <= 9; i++) {
      const primaryColor = `${getLightColor(DEFAULT_PRIMARY, i / 10)}`;
      document.documentElement.style.setProperty(`--el-color-primary-light-${i}`, primaryColor);
    }
    setAsideTheme();
    setHeaderTheme();
  };

  return {
    initTheme,
    setAsideTheme,
    setHeaderTheme
  };
};
