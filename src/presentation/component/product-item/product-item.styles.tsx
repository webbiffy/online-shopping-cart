import styled from 'styled-components';

export const ProductImage = styled.img`
    width: 100%;
    border: 0;
    max-height: 120px;
`;

export const ProductName = styled.b`
    font-size: 18px;
`;

export const ProductCategory = styled.p`
    color: green;
`;

export const ProductUnitPrice = styled.p`
    color: red;
    text-align: center;
    font-weight: bold;
`

export const Button = styled.button`
    background: #b0f868;
    color: #000000;
    width: 100%;
    border: 0;
    cursor: pointer;
    padding: 10px;
`

interface ColumnProps {width?: string;}

export const Column = styled.div<ColumnProps>`
    width: ${props => props.width}
`;

export const Wrapper = styled.div`
    padding: 0 20px;
    background: #f6f6f6;
    display: flex;
    flex: 1;
    align-items:center;
    gap: 20px;
`;