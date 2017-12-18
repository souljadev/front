'use strict'

const uploadApi = require('./api')
const indexView = require('../templates/ImageIndexAll.handlebars')
const pageShow = require('../templates/pageShow.handlebars')
// const getFormFields = require('../../../lib/get-form-fields')
// const store = require('../store')

const success = function (data) {
  console.log('success data is:', data)
  $('#message').html('success!')
}

const error = function (error) {
  $('#message').html('error')
  console.log('error is:', error)
}

// const showUpdateForm = function () {
//   $(this).siblings().removeClass('hidden')
// }

// const onUpdate = function () {
//   event.preventDefault()
//   // const itemId = $(event.target).attr('data-id')
//   const itemData = new FormData(this.siblings())
//   console.log(itemData)
//   uploadApi.updateUpload(itemData)
//     .then(updateUploadSuccess)
//     .catch(updateUploadFail)
// }

const onDelete = function (data) {
  const itemId = $(event.target).attr('data-id')
  uploadApi.deleteUpload(itemId)
    .then(deleteUploadSuccess)
    .catch(deleteUploadFail)
}

const indexAllSuccess = function (data) {
  $('#photo-grid').html(indexView({uploads: data.uploads}))
}
  // $('#photo-grid').on('submit', '.update-upload', onUpdate)
  // $('#photo-grid').on('click', '.delete-upload', onDelete)
  // $('#photo-grid').on('click', '.update-form-button', showUpdateForm)
  // $('.update-form-button').on('click', showUpdateForm)
  // $('.update-upload').on('submit', onUpdate)
  // $('.delete-upload').on('click', onDelete)
// }

const indexAllFail = function (error) {
  $('#message').html('error')
  console.log('indexAll error:', error)
}

const deleteUploadSuccess = function (data) {
  console.log('success data is:', data)
  $('#message').html('upload successfully deleted!')
}

const deleteUploadFail = function (error) {
  $('#message').html('error on delete')
  console.log('upload delete error:', error)
}

const updateUploadSuccess = function (data) {
  console.log('success data is:', data)
  $('#message').html('upload successfully updated!')
}

const updateUploadFail = function (error) {
  $('#message').html('error on update')
  console.log('upload update error:', error)
}

const pageShowSuccess = function (data) {
  $('#page-show').html(pageShow({uploads: data.uploads}))
}

const pageShowFail = function () {
  $('#message').html('error')
}

module.exports = {
  success,
  error,
  indexAllSuccess,
  indexAllFail,
  deleteUploadSuccess,
  deleteUploadFail,
  updateUploadSuccess,
  updateUploadFail,
  pageShowSuccess,
  pageShowFail,
  // showUpdateForm,
  onDelete
  // onUpdate
}
