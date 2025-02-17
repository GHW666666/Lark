<template>
    <div>
<router-view></router-view>
<div class="footer h-12">
<Tabbar class="fixed bottom-0"></Tabbar>
</div>
</div>
</template>

<script setup lang="ts">
import Tabbar from '@/components/Tabbar.vue'
</script>

