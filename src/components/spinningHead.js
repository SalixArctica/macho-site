import React from 'react';
import styled from 'styled-components';
import head from '../images/head.png';


//this component is hacky garbage please pay it no mind
const SpinningImg = styled.img`

    animation-name:spinny${props => props.random[1]};
    animation-iteration-count: infinite;
    animation-duration: ${props => props.random[0]}s;
    width: 3rem;
    filter: hue-rotate(${props => props.random[0] * 20}deg);


    @keyframes spinny1 {
        from {
            transform: rotate3d();
        }
        to {
            transform: rotate3d(0, 0, 1, 5turn)
        }
    }

    @keyframes spinny2 {
        from {
            transform: rotate3d();
        }
        to {
            transform: rotate3d(0, 1, 0, 1turn)
        }
    }

    @keyframes spinny3 {
        from {
            transform: rotate3d();
        }
        to {
            transform: rotate3d(0, 1, 1, 3turn)
        }
    }

    @keyframes spinny4 {
        from {
            transform: rotate3d();
        }
        to {
            transform: rotate3d(1, 0, 0, 1turn)
        }
    }

    @keyframes spinny5 {
        from {
            transform: rotate3d();
        }
        to {
            transform: rotate3d(1, 0, 1, 3turn)
        }
    }

    @keyframes spinny6 {
        from {
            transform: rotate3d();
        }
        to {
            transform: rotate3d(1, 1, 0, 7turn)
        }
    }

    @keyframes spinny7 {
        from {
            transform: rotate3d();
        }
        to {
            transform: rotate3d(1, 1, 1, 2turn);
            filter: hue-rotate(0deg);
        }
    }
`

// markup
export const SpinningHead = (props) => {
    return (
        <>
         <SpinningImg src={head} {...props} alt="yeet" />
        </>
    )
}
