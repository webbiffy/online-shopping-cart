import styled from 'styled-components';

interface DefaultItemProps {isActive?: boolean;}

export const DefaultItem = styled.div<DefaultItemProps>`
    padding: 20px 20px 5px 20px;
    text-transform: Capitalize;
    
    span {
        color: ${props => props.isActive == true ? "green": "black"};
        cursor: pointer;
    }
`;