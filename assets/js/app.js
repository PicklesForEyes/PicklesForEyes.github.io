$(document).ready(() => {

  // show/hide lostffound
  $('#lostffound').on('click', e => {
    e.preventDefault();
    $('#lostffound-description').toggleClass('visibility visible')
  })

  // show/hide djinn
  $('#djinn').on('click', e => {
    e.preventDefault();
    $('#djinn-description').toggleClass('visibility visible');
  })
})