import React, { useState } from 'react'
import { v4 as uuidV4 } from 'uuid'
import './App.css';
import Toaster from './components/Base/Components/Toaster'
import Button from './components/Base/Components/Button'
import Card from './components/Base/Components/Card'
import Modal from './components/Base/Components/Modal'
import { themes, ThemeContext } from './utils/theme'
import { AlertContext } from './utils/toasterAlert'
import { BsCheckAll, BsFillBellFill, BsFillCameraFill } from 'react-icons/bs'

const App = () => {

  const [theme, setTheme] = useState(themes.light)
  const [alertArray, setAlertArray] = useState([])

  const changeTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light)
  }

  const triggerAlert = (data, show) => {
    const id = `${uuidV4()} ${Date.now()}`
    setAlertArray([
      {
        id,
        data,
        show
      }
    ].concat(alertArray))
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App" style={{ padding: '10px', background: theme.bgColor }}>
        <AlertContext.Provider value={{ toaster: triggerAlert }}>
          <header className="App-header"></header>
          <button onClick={changeTheme} style={{ borderRadius: "10px" }}> Change Theme</button>
          <button onClick={() => triggerAlert(
            { message: `Well, i think you got it all wrong and it is so true`,
              type: "danger",
              dismiss: true,
              timeout: 10000
             },
            true
          )}> Show Alert</button>
          <button onClick={() => triggerAlert(
            { message: "Well, i think you got it all and it is so true", type: "success", dismiss: true },
            true
          )}> Show Alert</button>
          <button onClick={() => triggerAlert(
            { message: "Well, i think may have it all wrong and it is so true", type: "alert", dismiss: true },
            true
          )}> Show Alert</button>

          <Toaster toastList={alertArray} setToastList={setAlertArray}></Toaster>

          <Button type="primary">Primary</Button>
          <Button type="secondary">Secondary</Button>
          <Button type="success">Success</Button>
          <Button type="danger">Danger</Button>
          <Button type="warning"><BsFillBellFill/>Warning</Button>
          <br />
          <Button type="info">Info</Button>
          <Button type="light">Light</Button>
          <Button type="dark">Dark</Button>
          <Button type="link" link="https://google.com">Link</Button>
          <Button type="primary" small>Primary</Button>
          <Button type="primary" outlined><BsFillCameraFill/>Primary</Button>
          <Button type="primary" rounded><BsCheckAll/>Primary</Button>
        </AlertContext.Provider>
        <Card
          title="card title"
          header="Card Subtitle"
          image="https://themesbrand.com/minia/layouts/assets/images/small/img-5.jpg"
          footer={`THis is the Footer`}
        >
          <h4>Card Subtitle</h4>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Integer posuere erat a ante.
        </Card>
        <Card
          title="card title"
          header="Card Subtitle"
          image="https://themesbrand.com/minia/layouts/assets/images/small/img-5.jpg"
          footer={`THis is the Footer`}
          flip
        >
          <h4>Card Subtitle</h4>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Integer posuere erat a ante.
        </Card>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
