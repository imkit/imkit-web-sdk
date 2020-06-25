const onSetRoomActiveDefault = null // () => { console.log('test') }
const customRoomDescription = (value) => value
const onAjaxError = (error) => {
    if (error.RC === 401) {
      window.top.location.href = 'demo';
    } else {
      console.error(error.RM);
    }
  }

export { customRoomDescription, onSetRoomActiveDefault, onAjaxError }