'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./auth/events')

$(() => {
  setAPIOrigin(location, config)
  // Register Authorization Events
  $('.registration').on('submit', events.onRegistration)
  $('.sign-in').on('submit', events.onSignIn)
  $('.change-password').on('submit', events.onChangePassword)
  $('.signout').on('click', events.onSignOut)

  // Register Event to Show Form Modal
  $('.auth-modal').on('click', events.onModal)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
