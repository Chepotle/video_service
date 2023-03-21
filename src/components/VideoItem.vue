!<template>
    <div v-if="videoData.length != 0" class="video">
        <div class="video__header">
            <slot></slot>
        </div>
        <div class="video__content">
            <div
                v-for="(video, index) in videoData"
                :key="index"
                class="video__item"
            >
                <div class="video__img">
                    <div @click="changeMark(video)" class="video__mark">
                        <img
                            v-if="video.isBookmarked"
                            src="@/assets/icons/main/icon-bookmark-full.svg"
                            alt=""
                        />
                        <img
                            v-if="!video.isBookmarked"
                            src="@/assets/icons/main/icon-bookmark-empty.svg"
                            alt=""
                        />
                    </div>
                    <img
                        class="video__pic"
                        :src="video.thumbnail.regular.large"
                        alt=""
                    />
                    <div class="video__hover"></div>
                    <div class="video__play">
                        <img src="@/assets/icons/main/icon-play.svg" alt="" />
                        <span>Play</span>
                    </div>
                </div>
                <div class="video__info">
                    <div class="video__tags">
                        <div class="">{{ video.year }}</div>
                        <div class="video__dot"></div>
                        <img
                            v-if="video.category == 'Movie'"
                            class="video__category"
                            src="@/assets/icons/main/icon-category-movie.svg"
                            alt=""
                        />
                        <img
                            v-if="video.category == 'TV Series'"
                            class="video__category"
                            src="@/assets/icons/main/icon-category-tv.svg"
                            alt=""
                        />
                        <div class="">{{ video.category }}</div>
                        <div class="video__dot"></div>
                        <div class="">{{ video.rating }}</div>
                    </div>
                    <div class="video__name">{{ video.title }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from "vuex";

export default {
    props: {
        videoData: {
            type: Array,
            required: true,
        },
    },
    setup() {
        const store = useStore();
        const changeMark = (object) => {
            store.commit("data/changeMarkData", object);
        };
        return {
            changeMark,
        };
    },
};
</script>

<style scoped lang="scss">
@import "@/scss/mixins.scss";

.video {
    margin-top: 40px;
    padding-bottom: 50px;
    &__img {
        position: relative;
        cursor: pointer;
        &:hover .video__hover {
            opacity: 0.5;
            transition-property: opacity;
            transition-duration: 0.2s;
        }
        &:hover .video__play {
            opacity: 1;
            transition-property: opacity;
            transition-duration: 0.2s;
        }
    }
    &__pic {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        position: relative;
        z-index: 5;
    }
    &__header {
        font-size: 32px;
        font-weight: 300;
    }
    &__content {
        display: grid;
        grid-column-gap: 40px;
        grid-template-columns: repeat(4, 1fr);
        @include media("max", "xl") {
            grid-template-columns: repeat(3, 1fr);
        }
        @include media("max", "lg") {
            grid-template-columns: repeat(2, 1fr);
            grid-column-gap: 20px;
        }
        @include media("max", "sm") {
            grid-column-gap: 15px;
        }
    }
    &__item {
        margin-top: 32px;
    }
    &__mark {
        width: 32px;
        height: 32px;
        position: absolute;
        top: 16px;
        right: 16px;
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
    &__info {
        margin-top: 8px;
    }
    &__tags {
        font-size: 13px;
        font-weight: 300;
        display: flex;
        align-items: center;
        color: #fff;
    }
    &__name {
        font-size: 18px;
    }
    &__category {
        width: 12px;
        height: 12px;
        margin-right: 6px;
    }
    &__dot {
        width: 3px;
        height: 3px;
        background-color: #fff;
        border-radius: 50%;
        margin: 0 8px;
    }
}
</style>