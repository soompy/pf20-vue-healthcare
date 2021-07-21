<template>
    <div class="gallery-wrap">
        <div class="gallery">
            <div class="gallery-box">
                <div class="item">
                    <div class="item-details">
                        jelly-o brownie sweet
                    </div>
                </div>
            </div>
            <div class="gallery-box">
                <div class="item">
                    <div class="item-details">
                        jelly-o brownie sweet
                    </div>
                </div>
            </div>
            <div class="gallery-box">
                <div class="item">
                    <div class="item-details">
                        jelly-o brownie sweet
                    </div>
                </div>
            </div>
            <div class="gallery-box">
                <div class="item">
                    <div class="item-details">
                        jelly-o brownie sweet
                    </div>
                </div>
            </div>

<!--            <div class="item item&#45;&#45;large">-->
<!--                <div class="item-details">-->
<!--                    Muffin jelly gingerbread-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="item item&#45;&#45;medium">-->
<!--                <div class="item-details">-->
<!--                    sesame snaps chocolate-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="item item&#45;&#45;large">-->
<!--                <div class="item-details">-->
<!--                    Oat cake-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="item">-->
<!--                <div class="item-details">-->
<!--                    sugar plum dragée-->
<!--                </div>-->
<!--            </div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NoticeList',
        data() {
            return {

            }
        },
        components: {

        }
    }
</script>

<style lang="scss" scoped>
    .gallery {
        display: grid;
        grid-gap: 4px;
        grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
        grid-auto-rows: 150px;
        grid-auto-flow: row dense;
        .gallery-box {
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            box-sizing: border-box;
        }
        .item {
            position: relative;
            width: 100%;
            height: 100%;
            background: #0c9a9a;
            color: #fff;
            background: url('https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=');
            background-size: cover;
            background-position: center;
            box-shadow: -2px 2px 10px 0px rgba(#444, 0.4);
            transition: transform 0.3s ease-in-out;
            &:after {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.4);
                transition: all 0.3s ease-in-out;
            }
            .item-details {
                display: flex;
                align-items: flex-end;
                justify-content: center;
                height: 100%;
                position: relative;
                z-index: 5;
                padding-bottom: 12px;
            }
            &:hover {
                transform: scale(1.1);
                font-weight: bold;
                &:after {
                    opacity: 0.3;
                    background-image: linear-gradient(to top, #000000, rgba(0, 0, 0, 0));
                }
                .item-details {
                    align-items: center;
                    padding-bottom: 0;
                    text-shadow: #FC0 1px 0 10px;
                    color: #1a1a1a;
                }
            }
        }
    }
</style>
