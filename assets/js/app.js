$(document).ready(() => {

  // show/hide lostffound
  $('#lostffound').on('click', e => {
    e.preventDefault();
    $('#lostffound-description').toggleClass('visibility visible')
    $('#lostffound, #lostffound .card-image').css(
      {'transition': 'all .25s ease-in', 'border-radius': '0rem'})
  })

  // show/hide djinn
  $('#djinn').on('click', e => {
    e.preventDefault();
    $('#djinn-description').toggleClass('visibility visible');
    $('#djinn, #djinn .card-image').css(
      {'transition': 'all .25s ease-in', 'border-radius': '0rem'})
  })
})