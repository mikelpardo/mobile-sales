import { createGlobalStyle } from 'styled-components'
import { reboot } from 'ui/theme/reboot'
import { reset } from 'ui/theme/reset'

export const GlobalStyles = createGlobalStyle`
  ${reset};
  ${reboot};
`
