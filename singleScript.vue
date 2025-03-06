<template>
<div>
<div :id="'scriptFIle'+indexValue"> </div>
</div>
</template>
<script>
export default { 
props:['script','indexValue'],
components: {
// postscribe
},
head() {return {
    script:[this.script]
}},
mounted() {

},
}
</script>