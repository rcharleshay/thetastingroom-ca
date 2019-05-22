import { createGlobalStyle } from 'styled-components'
import Reboot from './Reboot.styled'
import Base from './Base.styled'

const GlobalStyle = createGlobalStyle`
  ${Reboot}
  ${Base}
`
export default GlobalStyle
