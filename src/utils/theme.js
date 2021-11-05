import React from 'react'

export const themes = {
  light: {
    bgColor: '#FBFAFF',
    textColor: '#313533',
  },
  dark: {
    bgColor: '#313533',
    textColor: '#FBFAFF',
  }
}

export const ThemeContext = React.createContext(null)
