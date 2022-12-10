<template>
    <div class="home-hot-sugguests">
        <template v-for="(item, index) in hotSuggests" :key="index">
            <span
              :style="{
                color: item.tagText.color,
                backgroundColor: item.tagText.background.color
                }"
            >
                {{item.tagText.text}}
            </span>
        </template>
    </div>
</template>

<script setup>
defineProps({
    hotSuggests: {
        type: Array,
        default: () => []
    }
})
</script>

<style lang="less" scoped>
.home-hot-sugguests {
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    padding: 0 20px;
    margin: 10px auto;
    span {
        padding: 4px 8px;
        border-radius: 10px;
        margin: 4px;
    }
}
</style>