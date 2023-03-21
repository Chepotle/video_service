<template>
    <div class="wrapper">
        <div class="container">
            <menu-panel />
            <div class="content">
                <the-search
                    @changeSearchActivity="changeSearchActivity"
                    :placeHolder="'Search for bookmarked shows'"
                    :searchData="componentData"
                />
                <video-item v-show="!searchActivity" :videoData="componentData"
                    >Bookmarked Shows</video-item
                >
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, ref, computed, watch } from "vue";
import MenuPanel from "@/components/MenuPanel.vue";
import TheSearch from "@/components/TheSearch.vue";
import VideoItem from "@/components/VideoItem.vue";

export default {
    components: {
        MenuPanel,
        TheSearch,
        VideoItem,
    },
    setup() {
        const store = useStore();
        const componentData = ref([]);
        const searchActivity = ref(false);
        const filmsData = computed(() => store.state.data.filmsData);
        const changeSearchActivity = (searchStatus) => {
            searchActivity.value = searchStatus;
        };
        const setData = async () => {
            await store.dispatch("data/getData");
            componentData.value = filmsData.value.filter(
                (item) => item.isBookmarked
            );
        };
        watch(
            filmsData,
            (newData) => {
                componentData.value = newData.filter(
                    (item) => item.isBookmarked
                );
            },
            { deep: true }
        );
        onMounted(setData);
        return {
            componentData,
            changeSearchActivity,
            searchActivity,
        };
    },
};
</script>

<style scoped lang="scss">
</style>