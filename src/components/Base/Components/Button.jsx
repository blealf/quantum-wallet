import React, { useState, useEffect, useContext } from 'react'
import styled, { css } from 'styled-components'
import { AlertContext } from '../../../utils/toasterAlert'

const Btn = styled.button`
  position: relative;
  background: ${props => props.soft ? props.altColor : props.outlined ? "#FFF": props.bgColor };
  color: ${props => props.soft ? props.bgColor : props.outlined ? props.bgColor: props.textColor };
  padding: ${props => props.small ? "5px 10px" : "10px 15px" };
  border-radius: ${props => props.rounded ? "30px" : "5px"};
  outline: 0;
  border: ${props => props.outlined ? "1px solid " + props.bgColor : "none"};;
  box-shadow: ${props => !props.link && !props.soft && !props.outlined ? "2px 2px 5px 1px rgba(143, 136, 139, 0.5)" : "none" };
  margin-right: 5px;
  transition: 0.1s all;

  &:before{
    display: block;
    content: "";
    position: absolute;
    z-index: 1;
    background: rgba(143, 136, 139, 0.1);
    border-radius: ${props => props.rounded ? "30px" : "5px"};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  svg {
    vertical-align: middle;
    margin-right: 5px;
    /* margin-left: 5px; */
    height: 1.1em;
  }
  &:active {
    transform: scale(0.95);
    box-shadow: none;
  }
  &:hover:before {
    background: rgba(143, 136, 139, 0.3);
  }
  &:hover {
    /* border: none; */
    cursor: pointer;
    ${props => props.link && css`
      text-decoration: underline;
    `}
     ${props => (props.soft || props.outlined) && css`
      background: ${props => props.bgColor };
      color: ${props => props.textColor };
    `
    }
  }

  &:disabled, .disabled {
    opacity: 0.5;
    transform: none;
    pointer-events: none;
  }

  a {
    color: ${props => props.textColor };
    text-decoration: none;
    z-index: 2;
  }
`

const Button = (props) => {

  const [bgColor, setBgColor] = useState()
  const [textColor, setTextColor] = useState()
  const [altColor, setAltColor] = useState()
  const toaster = useContext(AlertContext).toaster

  useEffect(() => {
    selectColor(props.type)
  }, [props.type])

  const selectColor = (value) => {
    switch (value) {
      case 'primary':
        setBgColor('#5156BE')
        setTextColor('#FFFFFB')
        setAltColor('#EDEEF8')
        break
        case 'secondary':
          setBgColor('#74788D')
          setTextColor('#FFFFFB')
          break
      case 'success':
        setBgColor('#2AB57D')
        setTextColor('#FFFFFB')
        break
        case 'danger':
          setBgColor('#FD625E')
          setTextColor('#FFFFFB')
          setAltColor('#FFEFEF')
        break
      case 'warning':
        setBgColor('#FFBF53')
        setTextColor('#FFFFFB')
        break
      case 'info':
        setBgColor('#4BA6EF')
        setTextColor('#FFFFFB')
        break
      case 'light':
        setBgColor('#E9E9EF')
        setTextColor('#000000')
        break
      case 'dark':
        setBgColor('#343A40')
        setTextColor('#FFFFFB')
        break
      case 'link':
        setBgColor('#FFF')
        setTextColor('#B67BBE')
        break
      default:
        setBgColor('#5156BE')
        setTextColor('#FFFFFB')
    }
  }

  const handleClick = () => {
    if(props.link) window.location.href=props.link
    toaster({message: props.children, type: props.type}, true)
  }
  return (
    <Btn
      {...props}
      bgColor={bgColor}
      textColor={textColor}
      altColor={altColor}
      onClick={handleClick}
    >
      {props.children}
    </Btn>
  )
}

export default Button
