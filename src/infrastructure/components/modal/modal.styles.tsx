import styled from 'styled-components';

interface ModalProps {isShown: boolean;}

export const Wrapper = styled.div<ModalProps>`
    background: #505050;
    position: absolute;
    opacity: 0.5;
    width: 250px;
    height: 100px;
    top: 50%;
    left: 50%;
    color: white;
    transform: translate(-50%,-50%);
    justify-content: center;
    align-items: center;
    input[type="button"] {
        margin-left: 20px;
        cursor: pointer;
    }
    display: ${props => props.isShown ? "flex": "none"};
`;