<template>
    <div class="common_area">
        <text-field></text-field>
        <div class="search-history">
            <!-- 최근 검색어가 없는 경우 -->
            <p class="blank">최근 검색어가 없습니다.</p>

            <!-- 최근 검색어가 있는 경우 -->

            <!-- 검색어 기능 끄고 켜기  >  small line 버튼 사용 -->

        </div>

        <div class="popular-keyword">
            <tag></tag>
        </div>

        <div class="checkbox">
            <ul>
                <li>
                    <input type="radio" id="f-option" name="selector">
                    <label for="f-option">Pizza</label>

                    <div class="check"></div>
                </li>

                <li>
                    <input type="radio" id="s-option" name="selector">
                    <label for="s-option">Bacon</label>

                    <div class="check"><div class="inside"></div></div>
                </li>

                <li>
                    <input type="radio" id="t-option" name="selector">
                    <label for="t-option">Cats</label>

                    <div class="check"><div class="inside"></div></div>
                </li>
            </ul>
        </div>



    </div>
</template>

<script>
    import TextField from "../../components/ui/TextField";
    import Tag from "../../components/ui/Tag";

    export default {
        name: 'SearchPage',
        data() {
            return {

            }
        },
        components: {
            Tag,
            TextField

        }
    }
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Lato');


    /*.container ul{*/
    /*    list-style: none;*/
    /*    margin: 0;*/
    /*    padding: 0;*/
    /*    overflow: auto;*/
    /*}*/

    ul li{
        color: #AAAAAA;
        display: block;
        position: relative;
        float: left;
        width: 100%;
        height: 100px;
        border-bottom: 1px solid #333;
    }

    ul li input[type=radio]{
        position: absolute;
        visibility: hidden;
    }

    ul li label{
        display: block;
        position: relative;
        font-weight: 300;
        font-size: 1.35em;
        padding: 25px 25px 25px 80px;
        margin: 10px auto;
        height: 30px;
        z-index: 9;
        cursor: pointer;
        -webkit-transition: all 0.25s linear;
    }

    ul li:hover label{
        color: red;
    }

    ul li .check{
        display: block;
        position: absolute;
        border: 5px solid #AAAAAA;
        border-radius: 100%;
        height: 25px;
        width: 25px;
        top: 30px;
        left: 20px;
        z-index: 5;
        transition: border .25s linear;
        -webkit-transition: border .25s linear;
    }

    ul li:hover .check {
        border: 5px solid red;
    }

    ul li .check::before {
        display: block;
        position: absolute;
        content: '';
        border-radius: 100%;
        height: 15px;
        width: 15px;
        top: 5px;
        left: 5px;
        margin: auto;
        transition: background 0.25s linear;
        -webkit-transition: background 0.25s linear;
    }

    input[type=radio]:checked ~ .check {
        border: 5px solid #0DFF92;
    }

    input[type=radio]:checked ~ .check::before{
        background: #0DFF92;
    }

    input[type=radio]:checked ~ label{
        color: #0DFF92;
    }

</style>
