import { Wrapper } from "./modal.styles"

const ModalAlert = ({ message, isShown }: any) => {
    return (
        <Wrapper isShown={isShown}>
            <span>{message}</span>
            <input type="button" value="x" />
        </Wrapper>
    )
}

export default ModalAlert