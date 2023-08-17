import { styled } from 'styled-components';

export const Pub = styled.div`
    background-color: ${(props) => props.theme.primaryColor};
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 2.5rem 2.25rem 3.75rem;
    display: flex;
    flex-direction: column;
    gap: 2.25rem;
    color: ${(props) => props.theme.fontColor};
    font-size: 1.3rem;

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;

        span{
            display: flex;
            align-items: center;
            gap: 1.5rem;

            img{
                width: 75px;
                height: 75px;
                border-radius: 50%;
            }
        }
    }

    p{
        text-align: center;
    }
`