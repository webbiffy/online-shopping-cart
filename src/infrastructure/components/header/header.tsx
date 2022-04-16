import { Wrapper, Title } from './header.styles'
import { CONFIG } from '../../../application/common/config'

export const Header = () => {
    return (
        <Wrapper>
            <Title>{CONFIG.APP.TITLE}</Title>
        </Wrapper>
    )
}