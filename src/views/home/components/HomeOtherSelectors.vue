<template>
    <div class="commonLine price-counter bottom-grey-line">
        <div class="price">价格不限</div>
        <div class="counter">人数不限</div>
    </div>
    <div class="commonLine keywords bottom-grey-line">
        关键字/位置/民宿名
    </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.commonLine {
    display: flex;
    padding: 0 20px;
    align-items: center;
    height: 44px;
    color: #999;
}
.price-counter {
    
    .price {
        flex: 1;
        border-right: 1px solid #f2f2f2;
    }
    .counter {
        min-width: 20%;
        margin-left: 4vw;
    }
}
</style>