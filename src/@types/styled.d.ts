import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme
// O declare está criando uma tipagem de tema no styled comp.
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
