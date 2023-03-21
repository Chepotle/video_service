<template>
    <svg :id="id" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <path
            :class="{ active: isActive }"
            d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
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
        const id = "series";
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