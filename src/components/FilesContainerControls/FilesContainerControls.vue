<template>
  <div>
    <div class="FilesContainerControls">

      <label
        class="FilesContainerControls-btn FilesContainerControls-add"
        for="FilesInput"
        title="Upload">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"> <g> <path d="M10.79,16.29L10.79,16.29c0.39,0.39,1.02,0.39,1.41,0l3.59-3.59c0.39-0.39,0.39-1.02,0-1.41l-3.59-3.59c-0.39-0.39-1.02-0.39-1.41,0l0,0c-0.39,0.39-0.39,1.02,0,1.41L12.67,11H4c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h8.67l-1.88,1.88C10.4,15.27,10.41,15.91,10.79,16.29z M19,3H5C3.89,3,3,3.9,3,5v3c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1V6c0-0.55,0.45-1,1-1h12c0.55,0,1,0.45,1,1v12c0,0.55-0.45,1-1,1H6c-0.55,0-1-0.45-1-1v-2c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v3c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z" fill="#00bfa5"/> </g></svg>
      </label>

      <div
        @click="togglePlaying"
        class="FilesContainerControls-btn"
        :title="toggleBtnTitle">
        <svg
          v-show="!isPlaying" 
          version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g><path d="M8,6.82v10.36c0,0.79,0.87,1.27,1.54,0.84l8.14-5.18c0.62-0.39,0.62-1.29,0-1.69L9.54,5.98C8.87,5.55,8,6.03,8,6.82z" fill="#00bfa5"/></g></svg>
        <svg
          v-show="isPlaying" 
          version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g><path d="M8,19L8,19c1.1,0,2-0.9,2-2V7c0-1.1-0.9-2-2-2h0C6.9,5,6,5.9,6,7v10C6,18.1,6.9,19,8,19z M14,7v10c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2V7c0-1.1-0.9-2-2-2h0C14.9,5,14,5.9,14,7z" fill="#00bfa5"/></g></svg>
      </div>

    </div>
  </div>
</template>

<script src='./FilesContainerControls.js'></script>
<style src='./FilesContainerControls.styl' lang="stylus"></style>