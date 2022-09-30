import styled from 'styled-components'

export const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: start;
    margin: 1%;
    gap: 1rem;
`;

export const T = styled.div`
    font-size: 2vw;
    font-weight: 500;
    text-align: center;
    padding: 0.5%;
    height: 5vh;
    background-color: white;
    border-bottom: solid black 2px;
    color: black;
`;

export const DivC = styled.div`
    min-width: 200px;
    background-color: #333;
    border: solid #666 1px;
    border-radius: 2px;
    color: white;
`;

export const N = styled.div`
    font-size: 2vw;
    text-align: center;
    background-color: #333;
    border-bottom: solid #666 2px;
    padding: 2%;
    color: white;
`;

export const P = styled.div`
    font-size: 1.3vw;
    text-align: center;
    border-bottom: solid #666 2px;
    padding: 1%1%;
`;

export const Task = styled.div`
    font-size: 1.2vw;
    padding: 2%;
`;

export const Deadline = styled.div`
    font-size: 1vw;
    text-transform: uppercase;
    background-color: #b2fab4;
    color: #333;
    padding: 2%;
    text-align: center;
`;