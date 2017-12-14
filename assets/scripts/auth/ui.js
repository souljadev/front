'use strict'

const store = require('../store')

const clearForms = function () {
  $('input').val('')
}

// Auth Modal Controls
const showModal = function (buttonId) {
  // Class of forms map to id of buttons to disiplay them.
  // TargetForm turns ID into class.
  const targetForm = $('.' + buttonId)
  // Map button id to Form titles
  const formtitle = {
    'registration': 'Sign Up',
    'sign-in': 'Sign In',
    'change-password': 'Change Password'
  }
  // Make sure error div is hidden
  $('.formerror-auth').addClass('hidden')
  // Hides all forms in modal
  $('form').hide()
  // Set Modal title
  $('.modal-title-auth').html(formtitle[buttonId])
  // Show form within modal
  targetForm.show()
  // Show modal
  $('.auth').modal('show')
}

const signUpSuccess = function (data) {
  $('#message').html('Signed up successfully. Now please sign in.')
  clearForms()
}

const signUpFail = function () {
  $('#message').html('Error on sign up. Please try again.')
  clearForms()
}

const signInSuccess = function (data) {
  store.user = data.user
  clearForms()
  $('#message').html('Signed in successfully')
  $('.modal').modal('hide')
    // Update NavBar
  $('.auth-menu').removeClass('hidden')
  $('.username').html('')
  $('.username').prepend('signed in as: ' + store.user.email)
  $('#sign-in').addClass('hidden')
}

const signInFail = function () {
  clearForms()
  $('#message').html('Error on sign in. Please try again.')
}

const signOutSuccess = function (data) {
  clearForms()
  $('#sign-in').removeClass('hidden')
  $('.auth-menu').addClass('hidden')
  store.user = false
  showModal('sign-in')
  $('#message').html('Signed out successfully')
  // $('.modal').modal('hide')
}

const signOutFail = function () {
  clearForms()
  $('#message').html('Error on sign out. Please try again.')
}

const changePassSuccess = function () {
  clearForms()
  $('#message').html('Changed password successfully')
  $('.modal').modal('hide')
}

const changePassFail = function () {
  clearForms()
  $('#message').html('Error on change password. Please try again.')
}

module.exports = {
  showModal,
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  signOutSuccess,
  signOutFail,
  changePassSuccess,
  changePassFail
}
