import React, { useContext, useCallback, useEffect } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { selectAlertColor } from '../../../utils/colors'
import { ThemeContext } from '../../../utils/theme'
// import { Transition } from 'react-transition-group';
// import '../../../assets/css/base/main.scss'

const ToasterWrapper = styled.div`
  position: absolute;
  flex-direction: column;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  top: 20px;
  right: 10px;
  overflow: hidden;
  white-space:nowrap;
  padding: 10px;
`;

const alertAnimation = keyframes`
  from { right: -400px; }
  to { right: 10px; }
`;

const AlertButton = styled.button`
  /* clip-path: polygon(5% 0, 99% 0%, 95% 99%, 0% 99%); */
  z-index: 99;
  display: block;
  position: relative;
  margin-bottom: 10px;
  /* right: -400px; */
  padding: 12px 20px;
  /* border: 1px solid ${props => props.textColor}; */
  border: none;
  background: ${props => props.bgColor};
  color: ${props => props.textColor};
  border-radius: 3px;
  min-width: 250px;
  text-align: left;
  transition: right 300ms ease-out;
  border-radius: 5px 0 0 5px;
  animation: ${alertAnimation} 0.6s linear;

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
const Toaster = ({ toastList, setToastList }) => {
  const context = useContext(ThemeContext)
  const [leave, setLeave] = React.useState([])

  const deleteToast = useCallback((id) => {
      const toastListItem = toastList.filter(e => e.id !== id)
      setToastList(toastListItem)
  }, [toastList, setToastList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length) deleteToast(toastList[toastList.length - 1].id)
    }, toastList[toastList.length - 1]?.data.timeout || 3000)
    return () => {
      clearInterval(interval)
    }
  }, [toastList, deleteToast])

  const slideOut = () => {
   const promise = new Promise(function(resolve, reject) {
     setTimeout(() => {
       resolve('-400px');
     }, 3000);
   });
   return promise;
   //  slideOut().then((out) => { return out })
 }

  return (
    <ToasterWrapper>
      {
        toastList.map((toast, i) => (
          (toast.show) ? (
            <AlertButton
              key={toast.id}
              textColor={selectAlertColor(toast.data.type).textColor}
              bgColor={selectAlertColor(toast.data.type).bgColor}
              theme={context}
              id={toast.id}
              style={{ right: slideOut().then((out) => { return out }) }}
            >
              <Content>
                {toast.data.message}
                {toast.data.dismiss ? (
                  <Dismiss onClick={() => deleteToast(toast.id)}>x</Dismiss>
                ) : null}
              </Content>
            </AlertButton>
          ) : null
        ))
      }
    </ToasterWrapper>
  )
}

export default Toaster
