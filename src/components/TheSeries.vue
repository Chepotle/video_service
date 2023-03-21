<template>
    <div class="wrapper">
        <div class="container">
            <menu-panel />
            <div class="content">
                <the-search
                    @changeSearchActivity="changeSearchActivity"
                    :placeHolder="'Search for TV series'"
                    :searchData="componentData"
                />
                <video-item v-show="!searchActivity" :videoData="componentData"
                    >TV Series</video-item
                >
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, ref, computed } from "vue";
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
                (item) => item.category == "TV Series"
            );
        };
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