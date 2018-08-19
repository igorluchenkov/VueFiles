<template>
  <div id="app">
    <div class="FilesContainer">

      <FilesContainerControls />

      <FilesInput 
        :isVisible="isFilesDragging" />
  
      <FilesItem
        v-for="(file, key) in elements" 
        :key="key"
        :name="file.name"
        :element="file.element"
        @removeItem="removeItem(key)"/>
      
    </div>
  </div>
</template>

<script src='./FilesContainer.js'></script>
<style src='./FilesContainer.styl' lang="stylus"></style>