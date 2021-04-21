<template>
    <!-- 2.x 버전은 루트 element 가 하나 여야 한다. -->
    <div>
        {{getMsg()}} {{msg}} {{value}} {{sample}}
    </div>
</template>

<script>
    // https://www.npmjs.com/package/jsdoc-vuejs 참고
    // 해당 컴포넌트 를 복사해서 새로운 컴포넌트를 생성한다.
    // 컴포넌트는 작은 요소 이기 때문에 다음 훅을 안쓴다.
    // 라우터 훅, keep-alive 훅 같은 페이지 에서 사용하는 훅은 정의 하지 않음
    /**
     * @module 모듈이름
     * @author email@email.com
     * @version 0.1
     * @since 2019년 11월 26일
     * @vue-prop { Boolean } isShow - prop 변수 설명
     * @vue-data { Boolean } show - 내부 변수 설명
     * @vue-event {} enter - 이벤트 설명
     * @description 컴포넌트 설명
     <code><pre>데이터 구조 설명</pre></code>
     수정 로그
     version 0.1
     */
    export default {
        name: 'ComponentPractice',
        mixins: [],
        directives: {},
        components: {},
        props: {
            value: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                msg: ''
            }
        },
        computed: {
            sample() {
                return this.value
            }
        },
        watch: {
            value(newVal, oldVal) {
                return ( console.log('template::watch::value::', newVal, oldVal, this))
            }
        },
        created() {
            console.log('created::')
        },
        mounted() {
            this.$nextTick(function() {
                //
            })
        },
        methods: {
            getMsg() {
                return this.msg
            }
        },
        beforeDestroy() {}        
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>

