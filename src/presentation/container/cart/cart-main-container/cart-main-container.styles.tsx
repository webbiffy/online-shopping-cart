import styled from 'styled-components';

export const CartHeaderWrapper = styled.div`
    padding: 20px 20px 15px;
    background: #cbcbcb;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;

    span {
        font-weight: bold;
        font-size: 18px;
    }

    input[type='button'] {
        padding: 4px;
        width: 100px;
        color: white;
        background: red;
        border: 0;
        align-self: flex-end;
        cursor: pointer;
        border-radius: 3px;
    }
`
export const CheckoutButton = styled.button`
    background: #b0f868;
    color: #000000;
    width: 100%;
    border: 0;
    cursor: pointer;
    padding: 10px;
`
export const CartPriceSummaryWrapper = styled.div`
    background: #cbcbcb;
    display: flex;
    flex-direction: column;
    padding: 28px 20px;
`;

export const CartDetailWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const Wrapper = styled.section`
    background: #f7f7f7;
    width: 25%;
    display: flex;
    flex-direction: column
`;