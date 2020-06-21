<template>
    <div class="product">
        <product-param>
        <!-- 同 <ProductParam> -->
            <template v-slot:buy>
                <button class="btn">立即购买</button>
            </template>
        </product-param>
        <div class="content">
            <h2>sss</h2>
            <h2>sss</h2>
            <h2>sss</h2>
            <h2>sss</h2>
            <h2>sss</h2>
            <h2>sss</h2>
            <h2>sss</h2>
            <h2>sss</h2>
            <h2>sss</h2>
            <h2>sss</h2>
            <h2>sss</h2>
            <h2>sss</h2>
            <h2>sss</h2>
            <h2>sss</h2>
            <h2>sss</h2>
            <h2>sss</h2>
        </div>
    </div>
</template>
<script>
    import ProductParam from './../components/ProductParam'
    export default{
        name:'product',
        components:{
            ProductParam
        }
    }
</script>
<style lang="scss">
    .product{
        button{
            margin-left: 10px;
        }
    }
    .content{
        background-color: green;
        line-height: 50px;
    }
</style>