<template>
    <div class="body_content">
        <AuthHeader />
        <div class="content-area">
            <router-view />
        </div>
        <AuthFooter />
    </div>
</template>
<script>
// @ is an alias to /src
import AuthHeader from "@/components/AuthHeader.vue";
import AuthFooter from "@/components/AuthFooter.vue";

export default {
  components: {
    AuthHeader,AuthFooter
  },
};
</script>



