import * as React from "react"
import styled from 'styled-components';

const Card = styled.section`
    border-radius: 10px;
    background-color: #23272A;
    padding: .5rem 1rem;
    width: 350px;

    color: #FFFFFF;
`

const ProfilePic = styled.img`
    left: 30px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 1rem;
    z-index: 1;
`

const OnlineCircle = styled.div`
    content: ' ';
    display: inline-block;
    width: 15px;
    height: 15px;
    -moz-border-radius: 7.5px;
    -webkit-border-radius: 7.5px;
    border-radius: 50%;
    background-color: lightgreen;
    z-index: 20;
    position: relative;
    border: 3px solid #23272A;
    left: 50px;
    &:after{
        opacity: 0;
        content: 'Online';
        background: #23272A;
        position: relative;
        bottom: 25px;
        padding: 4px;
        border-radius: 4px;
        transition: all .3s ease-in-out;
    }

    &:hover{
        &:after {
            opacity: 1;
        }
    }
`

const Flex = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const FlexWJustify = styled(Flex)`
    justify-content: space-between;
`

const AddToServerbutton = styled.button`
    border-radius: 5px;
    color: white;
    border: none;
    background: #7289DA;
    padding: .4rem 1rem;
    align-self: center;
`

const Name = styled.h2`
    align-self: center;
`

// markup
const BotWidget = () => {
    return (
        <Card>
            <Flex>
                <div>
                    <OnlineCircle/>
                    <ProfilePic src='https://img.bleacherreport.net/img/images/photos/002/318/574/macho-man-randy-savage-1_crop_exact.jpg?w=1200&h=1200&q=75' />
                </div>
                <Name>Macho Bot</Name>
            </Flex>
            <FlexWJustify>
            <p>in <b>102</b> servers</p>
                <AddToServerbutton>Add to Server</AddToServerbutton>
                </FlexWJustify>
        </Card>
    )
}

export default BotWidget
