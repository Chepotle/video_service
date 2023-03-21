<template>
    <svg :id="id" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <path
            :class="{ active: isActive }"
            d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
            fill="#5A698F"
        />
    </svg>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
    setup() {
        const isActive = ref(false);
        const route = useRoute();
        const id = "home";
        const makeActive = () => {
            let pathName = "";
            if (route.path == "/") {
                pathName = "home";
            } else {
                pathName = route.path.replace("/", "");
            }
            pathName == id ? (isActive.value = true) : (isActive.value = false);
        };
        onMounted(makeActive);
        return {
            isActive,
            makeActive,
            id,
        };
    },
};
</script>

<style scoped lang="scss">
@import "@/scss/colors.scss";

svg:hover path {
    fill: $Red;
}
path {
    transition-property: fill;
    transition-duration: 0.2s;
}
.active {
    fill: #fff !important;
}
</style>