import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Wrap = styled.div`
    border-bottom: solid white 2px;
    padding: 2%;
`;

export const Space = styled.div`
    height: 5vh;
`;

export const DivT = styled.div`
    color: white;
    font-size: 1.4vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5vh;
`;

export const DivL = styled.div`
    padding: 2%;
    text-align: center;
    &:hover{
        background-color: #8c0032;
    }
`;

export const Ref = styled(NavLink)`
    text-decoration: none;
    color: white;
    font-size: 1.2vw;
`;