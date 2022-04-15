import styled from 'styled-components';

export const ProductImage = styled.img`
    width: 100%;
    border: 0;
    max-height: 120px;
`;

export const ProductName = styled.p`
    font-size: 18px;
    margin-top: 0;
    font-weight: bold;
`;

export const ProductUnitPrice = styled.span`
    color: red;
    font-weight: bold;
`

export const ButtonQuantity = styled.button`
    width: 30px;
    height: 30px;
`

export const InputQuantity = styled.input`
    width: 30px;
    height: 28px;
    border: 0;
    text-align: center;
`

interface ColumnProps {width?: string;}

export const Column = styled.div<ColumnProps>`
    width: ${props => props.width}
`;

export const Wrapper = styled.div`
    padding: 20px;
    background: #f6f6f6;
    display: flex;
    flex: 1;
    align-items:top;
    gap: 20px;
`;