import styled from 'styled-components';

interface CategoryLabelProps {isActive?: boolean;}
export const CategoryLabel = styled.span<CategoryLabelProps>`
    cursor: pointer;
    color: ${props => props.isActive === true ? "green": "black"};
`

export const Wrapper = styled.div`
    padding: 7px 20px;
    text-transform: Capitalize;
`;