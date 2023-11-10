<script setup>
</script>

<template>
    <div class="app-header">
        <div class="container">
            <div class="row">
                <div class="col"><div class="logo">BOOLFIX</div></div>
                <div class="col"><input type="text"></div>
            </div>
        </div>    
    </div>
</template>
  
<style lang="scss" scoped>
    @use '../components/style/partial/varibils' as *;

    .app-header {
        background-color: $bg-header;
        color: $f-color-base;
        padding: $p-base;
        
        .row {
            justify-content: space-between;
        }
        .logo {
            color: $logo-color;
        }
    }

</style>
