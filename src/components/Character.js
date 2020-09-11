// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const CharacterDiv = styled.div`
    border: 10px solid black;
    width: 50%;
    margin: 3% auto;
    border-radius: 100px;
    box-shadow: 3px 5px #fff;
 `

const Name = styled.h2`
    font-size: 3rem;
    color: white;
    text-decoration: underline;
 `



const Gender = styled.p`
    
`

const Height = styled.p`

`

const Mass = styled.p`

`

const BirthYear = styled.p`

`

const EyeColor = styled.p`

`

const HairColor = styled.p`

`

const SkinColor = styled.p`

`



export default function Character(props){
    return (
        <CharacterDiv>
            <Name>{props.name}</Name>
            <Gender>Gender: {props.gender}</Gender>
            <Height>Height {props.height}</Height>
            <Mass>Mass: {props.mass}</Mass>
            <BirthYear> Birth Year: {props.birthYear}</BirthYear>
            <EyeColor>Eye Color: {props.eyeColor}</EyeColor>
            <HairColor>Hair Color: {props.hairColor}</HairColor>
            <SkinColor>Skin Color: {props.skinColor}</SkinColor>
        </CharacterDiv>
    )
}
