<template>
<div>
<div v-for="(scr,i) in $store.state.scripts" :key="i">
    <singleScript v-if="scr && scr.src"  :script="scr" :indexValue="i" />
</div>
</div>
</template>
<script>
export default { 
computed:{
    scriptsInStoreLength() {
        return this.$store.state.scripts.length
    },
},
watch:{
    scriptsInStoreLength() {
        const encodedScripts = encodeURIComponent(JSON.stringify(this.$store.state.scripts));
        this.$cookies.set('allScripts', encodedScripts)
        if(this.$store.state.devMode) {
            setTimeout(() => {
                location.reload()
            }, 1);
        }
        
    },
},
}
</script>