<template>
    <router-view />
</template>

<script>
</script>


<style lang="scss">
@import "@/scss/colors.scss";
@import "@/scss/mixins.scss";

body {
    font-family: "Montserrat", sans-serif;
    font-family: "Outfit", sans-serif;
}

.wrapper {
    background-color: $Dark;
    color: #fff;
    min-height: 100vh;
}

.container {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding: 0 40px;
    background-color: $Dark;
    display: flex;
    @include media("max", "lg") {
        flex-direction: column;
    }
}

.content {
    width: 100%;
    margin-left: 35px;
    max-width: calc(100% - 130px);
    @include media("max", "lg") {
        max-width: 100%;
        margin-left: 0;
    }
}

/*Обнуление*/
* {
    padding: 0;
    margin: 0;
    border: 0;
}

*,
*:before,
*:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

:focus,
:active {
    outline: none;
}

a:focus,
a:active {
    outline: none;
}

nav,
footer,
header,
aside {
    display: block;
}

input,
button,
textarea {
    font-family: inherit;
}

input::-ms-clear {
    display: none;
}

button {
    cursor: pointer;
}

button::-moz-focus-inner {
    padding: 0;
    border: 0;
}

a,
a:visited {
    text-decoration: none;
}

a:hover {
    text-decoration: none;
}

ul li {
    list-style: none;
}

img {
    vertical-align: middle;
}
/*--------------------*/
</style>
