import { Theme } from "@/hooks/interface";

export const headerTheme: Record<Theme.ThemeType, { [key: string]: string }> = {
  light: {
    "--el-header-logo-text-color": "#303133",
    "--el-header-bg-color": "#ffffff",
    "--el-header-text-color": "#303133",
    "--el-header-text-color-regular": "#606266",
    "--el-header-border-color": "#e4e7ed"
  }
};
