<template>
  <built-comp
  :entity_id="entity_id" :props="props" @customevent="customevent">
  <slot></slot>
  </built-comp>
  </template>
  <script>
  export default {
    props: ['entity_id', 'props'],
    methods:{
      customevent(e) {this.$emit('customevent',e)},
    }
  }
  </script>
