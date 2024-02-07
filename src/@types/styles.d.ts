import "styled-components";
import {lightTheme} from "../styles/themes/light-theme"


type ThemeType = typeof lightTheme;

declare module "styled-components" {
    export interface LigthTheme extends ThemeType {}
}