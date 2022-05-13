import 'styled-components'
import theme from './theme'

declare module 'styled-components'{
    type DefaultTheme = typeof theme;
    export interface DefaultTheme extends ThemeType{}
}