<template>
    <div class="search">
        <div class="search__string">
            <img
                class="search__img"
                src="@/assets/icons/main/icon-search.svg"
                alt=""
            />
            <input
                @input="search"
                v-model="searchQuery"
                :placeholder="placeHolder"
                class="search__input"
            />
            <div class="search__line"></div>
        </div>
        <div v-if="searchQuery" class="search__results">
            Found {{ searchResults.length }} results for ‘{{ searchQuery }}’
        </div>
        <video-item :videoData="searchResults" />
    </div>
</template>

<script>
import VideoItem from "@/components/VideoItem.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
    props: {
        placeHolder: {
            type: String,
            required: true,
        },
        searchData: {
            type: Array,
            required: false,
        },
    },
    components: {
        VideoItem,
    },
    setup(props, context) {
        const store = useStore();
        const filmsData = computed(() => store.state.data.filmsData);
        const searchQuery = ref("");
        const searchResults = ref([]);
        const search = () => {
            context.emit("changeSearchActivity", !!searchQuery.value.length);
            if (props.searchData && searchQuery.value.length > 0) {
                searchResults.value = props.searchData.filter((item) =>
                    item.title
                        .toLocaleLowerCase()
                        .includes(searchQuery.value.toLocaleLowerCase())
                );
            } else if (
                props.searchData == undefined &&
                searchQuery.value.length > 0
            ) {
                searchResults.value = filmsData.value.filter((item) =>
                    item.title
                        .toLocaleLowerCase()
                        .includes(searchQuery.value.toLocaleLowerCase())
                );
            } else {
                searchResults.value = [];
            }
        };
        return {
            searchQuery,
            searchResults,
            search,
        };
    },
};
</script>

<style scoped lang="scss">
@import "@/scss/colors.scss";
@import "@/scss/mixins.scss";

.search {
    margin: 65px 0 35px 0;
    &__string {
        display: flex;
        position: relative;
    }
    &__img {
        width: 32px;
        height: 32px;
    }
    &__input {
        width: 100%;
        height: 32px;
        background-color: $Dark;
        color: #fff;
        font-size: 24px;
        font-weight: 300;
        margin-left: 24px;
        caret-color: #fc4747;
        position: relative;
        &:focus + .search__line {
            width: 100%;
            transition-property: width;
            transition-duration: 0.2s;
        }
    }
    &__results {
        margin-top: 35px;
        font-size: 32px;
        font-weight: 300;
    }
    &__line {
        position: absolute;
        width: 0;
        height: 1px;
        background-color: $Blue;
        left: 0;
        bottom: -14px;
        transition-property: width;
        transition-duration: 0.3s;
    }
}
</style>