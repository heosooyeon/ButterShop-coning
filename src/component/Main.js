import React from 'react'
import styled from "styled-components";
import img1 from "../images/mainimg1.png"

export default function Main(){
    return(
        <div>
            <Image></Image>
        </div>
    );
}

const Image = styled.div`
    width : 1160px;
    height : 484.54px;
    margin : auto;
    background-image : url(${img1});
    background-size : cover;
`