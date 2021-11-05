export const selectAlertColor = (value) => {
  switch (value) {
    case 'primary':
      return {
        bgColor: '#B9BBE5',
        textColor: '#393C85'
      }
  
    case 'secondary':
      return {
        bgColor: '#C7C9D1',
        textColor: '#6B5486'
      }
    case 'success':
      return {
        bgColor: '#AAE1CB',
        textColor: '#667F88'
      }
    case 'danger':
      return {
        bgColor: '#FEC0BF',
        textColor: '#B14542'
      }
    case 'alert':
      return {
        bgColor: '#FFE5BA',
        textColor: '#EBAF5F'
      }
    case 'info':
      return {
        bgColor: '#B7DBF9',
        textColor: '#5B74B9'
      }
    case 'light-alert':
      return {
        bgColor: '#F6F6F9',
        textColor: '#C0ABA7'
      }
    case 'dark-alert':
      return {
        bgColor: '#AEB0B3',
        textColor: '#24507F'
      }
    default:
      return {
        bgColor: '#93c9ff',
        textColor: '#2d6399'
      }
  }
}

export const selectButtonColor = (value) => {
  switch (value) {
    case 'primary':
      return {
        bgColor: '#5156BE',
        textColor: '#FFFFFB',
        altColor: '#EDEEF8'
      }
      case 'secondary':
        return {
          bgColor: '#74788D',
          textColor: '#FFFFFB',
        }
    case 'success':
      return {
        bgColor: '#2AB57D',
        textColor: '#FFFFFB'
      }
      case 'danger':
        return {
          bgColor: '#FD625E',
          textColor: '#FFFFFB',
          altColor: '#FFEFEF'
        }
    case 'warning':
      return {
        bgColor: '#FFBF53',
        textColor: '#FFFFFB'
      }
    case 'info':
      return {
        bgColor: '#4BA6EF',
        textColor: '#FFFFFB'
      }
    case 'light':
      return {
        bgColor: '#E9E9EF',
        textColor: '#000000'
      }
    case 'dark':
      return {
        bgColor: '#343A40',
        textColor: '#FFFFFB'
      }
    case 'link':
      return {
        bgColor: '#FFF',
        textColor: '#B67BBE'
      }
    default:
      return {
        bgColor: '#5156BE',
        textColor: '#FFFFFB'
      }
  }
}
