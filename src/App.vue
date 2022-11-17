<template>
    <Header v-if="authen"></Header>
    <div id="section-body">
        <NavigationComponent v-if="authen"></NavigationComponent>
        <router-view class="section-router"></router-view>
    </div>
    <div id="section-player" v-if="authen">
        <AudioPlayer />
    </div>
</template>
<script>
import { auth } from './stores/auth';
export default {
    data: () => {
        return {
            authen: auth.is_authenticated
        }
    }
}
</script>