<template>
    <div class="controller">
            <p class="label">{{label}}</p>
            <img class="w-100" src="@/assets/img/svg/png/loginscreen.png" alt="login-image">
    </div>
</template>
<script>
export default {
    props:['label'],
    setup(props) {
        const label = props.label
        return {
            label
        }
    },
}
</script>
<style lang="scss" scoped>
.controller{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
}
.label{
    color:rgba(31, 41, 55, 1);
    font-weight: 700;
    font-size: 16px;
}
</style>