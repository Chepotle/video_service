<template>
    <div v-if="trendingData.length != 0" class="trending">
        <div class="trending__header">Trending</div>
        <swiper
            :modules="modules"
            :autoplay="{ pauseOnMouseEnter: true }"
            :freeMode="true"
            :virtual="true"
            :breakpoints="{
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                575: {
                    slidesPerView: 1.5,
                    spaceBetween: 15,
                },
                1: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
            }"
        >
            <swiper-slide
                class="trending__item"
                v-for="(slide, index) in trendingData"
                :key="index"
                :virtualIndex="index"
            >
                <div class="trending__description">
                    <div @click="changeMark(slide)" class="trending__mark">
                        <img
                            v-if="slide.isBookmarked"
                            src="@/assets/icons/main/icon-bookmark-full.svg"
                            alt=""
                        />
                        <img
                            v-if="!slide.isBookmarked"
                            src="@/assets/icons/main/icon-bookmark-empty.svg"
                            alt=""
                        />
                    </div>
                    <div class="trending__info">
                        <div class="trending__tags">
                            <div class="">{{ slide.year }}</div>
                            <div class="trending__dot"></div>
                            <img
                                v-if="slide.category == 'Movie'"
                                class="trending__category"
                                src="@/assets/icons/main/icon-category-movie.svg"
                                alt=""
                            />
                            <img
                                v-if="slide.category == 'TV Series'"
                                class="trending__category"
                                src="@/assets/icons/main/icon-category-tv.svg"
                                alt=""
                            />
                            <div class="">{{ slide.category }}</div>
                            <div class="trending__dot"></div>
                            <div class="">{{ slide.rating }}</div>
                        </div>
                        <div class="trending__name">
                            {{ slide.title }}
                        </div>
                    </div>
                    <div class="trending__hover"></div>
                    <div class="trending__play">
                        <img src="@/assets/icons/main/icon-play.svg" alt="" />
                        <span>Play</span>
                    </div>
                </div>
                <img
                    class="trending__img"
                    :src="slide.thumbnail.trending.large"
                    alt=""
                />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { ref, computed, watch, onMounted } from "vue";
import { useStore } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Virtual, FreeMode, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const store = useStore();
        const filmsData = computed(() => store.state.data.filmsData);
        const changeMark = (object) => {
            store.commit("data/changeMarkData", object);
        };
        const trendingData = ref([]);
        watch(filmsData, (newData) => {
            trendingData.value = newData.filter((item) => item.isTrending);
        });
        const setData = () => {
            if (filmsData.value != null) {
                trendingData.value = filmsData.value.filter(
                    (item) => item.isTrending
                );
            }
        };
        onMounted(setData);

        return {
            trendingData,
            changeMark,
            modules: [Virtual, FreeMode, Autoplay],
        };
    },
};
</script>

<style scoped lang="scss">
@import "@/scss/colors.scss";
@import "@/scss/mixins.scss";

.trending {
    &__item {
        position: relative;
    }
    &__hover {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        z-index: 5;
        transition-property: opacity;
        transition-duration: 0.2s;
    }
    &__play {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: rgb(59%, 59%, 59%, 0.5);
        width: 117px;
        height: 48px;
        border-radius: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition-property: opacity;
        transition-duration: 0.2s;
        opacity: 0;
        z-index: 10;
        font-size: 18px;
        img {
            margin-right: 19px;
            width: 30px;
            height: 30px;
        }
    }
    &__description {
        cursor: pointer;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        &:hover .trending__hover {
            opacity: 0.5;
            transition-property: opacity;
            transition-duration: 0.2s;
        }
        &:hover .trending__play {
            opacity: 1;
            transition-property: opacity;
            transition-duration: 0.2s;
        }
    }
    &__info {
        position: absolute;
        left: 25px;
        bottom: 25px;
    }
    &__tags {
        font-size: 15px;
        font-weight: 300;
        display: flex;
        align-items: center;
        color: #fff;
    }
    &__name {
        font-size: 24px;
    }
    &__category {
        width: 12px;
        height: 12px;
        margin-right: 6px;
    }
    &__mark {
        width: 32px;
        height: 32px;
        position: absolute;
        top: 16px;
        right: 24px;
        border-radius: 50%;
        background-color: rgba(22, 29, 47, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 15;
        transition-property: scale;
        transition-duration: 0.2s;
        &:hover {
            scale: 1.2;
            transition-property: scale;
            transition-duration: 0.2s;
        }
    }
    &__dot {
        width: 3px;
        height: 3px;
        background-color: #fff;
        border-radius: 50%;
        margin: 0 8px;
    }
    &__header {
        font-size: 32px;
        font-weight: 300;
        margin-bottom: 25px;
    }
    &__img {
        width: 100%;
        max-width: 470px;
        border-radius: 20px;
    }
}
</style>
