import React from 'react'
import Alert from '../components/Base/Components/Alert'


const toasterAlert = (message, props) => {
  // if (props?.show) return <Alert message={message}{...props}></Alert>
   return (<Alert message="message" show></Alert>)
}


export default toasterAlert

export const AlertContext = React.createContext()
