<template>
    <div class="menu">
        <div class="menu__wrapper">
            <div class="menu__logo">
                <img src="@/assets/icons/menu/logo.svg" alt="" />
            </div>
            <div class="menu__panel">
                <nav-home @click="menuRoute" class="menu__btn" />
                <nav-movies @click="menuRoute" class="menu__btn" />
                <nav-series @click="menuRoute" class="menu__btn" />
                <nav-bookmarked @click="menuRoute" class="menu__btn" />
            </div>
        </div>
        <div class="menu__user">
            <img src="@/assets/icons/menu/image-avatar.png" alt="" />
        </div>
    </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
import NavHome from "@/components/svg/NavHome.vue";
import NavMovies from "@/components/svg/NavMovies.vue";
import NavSeries from "@/components/svg/NavSeries.vue";
import NavBookmarked from "@/components/svg/NavBookmarked.vue";

export default {
    components: {
        NavHome,
        NavMovies,
        NavSeries,
        NavBookmarked,
    },
    setup() {
        const router = useRouter();
        const pathName = ref("");
        const menuRoute = (e) => {
            let route = e.currentTarget.id;
            router.push({ name: route });
        };
        return {
            menuRoute,
            pathName,
        };
    },
};
</script>

<style scoped lang="scss">
@import "@/scss/colors.scss";
@import "@/scss/mixins.scss";

.menu {
    margin-top: 32px;
    background-color: $DarkBlue;
    min-height: 90vh;
    height: 100%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 35px 0;
    width: 95px;
    @include media("max", "lg") {
        flex-direction: row;
        min-height: auto;
        width: 100%;
        padding: 25px 20px;
        margin-top: 23px;
    }
    @include media("max", "sm") {
        padding: 25px 10px;
    }
    &__wrapper {
        @include media("max", "lg") {
            display: flex;
            width: calc(50% + 90px);
            justify-content: space-between;
        }
        @include media("max", "sm") {
            width: calc(50% + 70px);
        }
    }
    &__panel {
        display: flex;
        flex-direction: column;
        align-items: center;
        @include media("max", "lg") {
            flex-direction: row;
        }
    }
    &__logo {
        margin-bottom: 75px;
        display: flex;
        justify-content: center;
        @include media("max", "lg") {
            margin-bottom: 0;
        }
    }
    &__btn {
        margin-bottom: 40px;
        cursor: pointer;
        height: 20px;
        width: 20px;
        @include media("max", "lg") {
            margin-bottom: 0;
            margin-left: 30px;
            &:first-child {
                margin-left: 0;
            }
        }
        @include media("max", "sm") {
            margin-left: 20px;
        }
    }
    &__user img {
        width: 40px;
        height: 40px;
    }
}
</style>