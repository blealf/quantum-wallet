import React, { useState, useEffect, useRef, useContext } from 'react'
import styled from 'styled-components'
import { selectAlertColor } from '../../../utils/colors'
import { ThemeContext } from '../../../utils/theme'
// import { Transition } from 'react-transition-group';
import '../../../assets/css/base/main.scss'

const AlertButton = styled.button`
  /* clip-path: polygon(5% 0, 99% 0%, 95% 99%, 0% 99%); */
  z-index: 99;
  display: block;
  position: relative;
  margin-bottom: 10px;
  right: -300px;
  padding: 12px 20px;
  ${'' /* border: 1px solid ${props => props.textColor}; */}
  border: none;
  background: ${props => props.bgColor};
  color: ${props => props.textColor};
  border-radius: 3px;
  min-width: 250px;
  text-align: left;
  transition: right 300ms ease-out;
  border-radius: 5px 0 0 5px;

  &:before {
    border-radius: 5px 0 0 5px;
    display: block;
    content: "";
    position: absolute;
    z-index: 1;
    background: ${props => props.textColor};
    border-right: 1px solid ${props => props.textColor};
    width: 30px;
    top: 0;
    left: 0;
    bottom: 0
  }
  svg {
    vertical-align: middle;
    margin-right: 5px;
    margin-left: -30px;
    fill: ${props => props.bgColor};
    height: 1.1em;
    z-index: 4;
  }
`;

const Content = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 20px;
  margin-right: 10px;
`;
const Dismiss = styled.div`
  display: block;
  margin-left: auto;
  position: absolute;
  cursor: pointer;
  font-size: 16px;
  right: 5px;
  top: 1px;
`;
<style>

</style>
const Alert = React.memo(({ id, remove, show, children, type, dismiss, timeout }) => {
  const [alertColor, setAlertColor] = useState(selectAlertColor())
  const [showAlert, setShowAlert] = useState(false)
  const context = useContext(ThemeContext)
  const duration = timeout || 6000
  const alertRef = useRef()

  useEffect(() => {
    if (!show) return
    setShowAlert(show)
    selectColor(type)
    setTimeout(() => {
      alertRef.current.style.right = '10px'
    }, 50);
    if (!dismiss) {
      setTimeout(() => {
        alertRef.current.style.right = `${-(alertRef.current.offsetWidth + 50)}px`
        setTimeout(() => {
          alertRef.current.style.display = 'none'
          setShowAlert(false)
        }, 300)
      }, duration)
    }
    return () => {
      remove(id)
      console.log('unmounting...')
    }
  }, [show, type, dismiss, duration, remove, id])

  const selectColor = (value) => {
    setAlertColor(selectAlertColor(value))
  }

  const close = () => {
    alertRef.current.style.right = `${-(alertRef.current.offsetWidth + 50)}px`
    if (dismiss) {
      setTimeout(() => {
         remove(id)
      }, 300)
    }
  }

  return (
    <>
      {
        (showAlert) ? (
          <AlertButton
            textColor={alertColor.textColor}
            bgColor={alertColor.bgColor}
            ref={alertRef}
            theme={context}
          >
            <Content>
              {children}
              {dismiss ? (<Dismiss onClick={close}>x</Dismiss>) : null}
            </Content>
          </AlertButton>
        ) : null
      }
    </>
  )
})

export default React.memo(Alert)
