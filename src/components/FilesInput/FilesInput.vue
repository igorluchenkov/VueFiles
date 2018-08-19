<template>
  <div 
    class="FilesInput-wrapper"
    :class="isVisible ? 'FilesInput-wrapper-active' : ''">
    Drop your files here
    <div class="FilesInput-wrapper__description">
      Supported formats: image/png, image/jpeg, video/mp4, video/webm, video/ogg, audio/mpeg, audio/ogg, audio/wav
    </div>
    <input 
      type="file" 
      id="FilesInput"
      class="FilesInput"
      @change="uploadNewFiles"
      multiple>

    <label
      id="FilesInput-label"
      class="FilesInput-label"
      for="FilesInput"> 
    </label>

  </div>
</template>

<script src='./FilesInput.js'></script>
<style src='./FilesInput.styl' lang="stylus"></style>