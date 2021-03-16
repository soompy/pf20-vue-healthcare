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
        // 이름 적는 것을 잊지마세요
        name: 'ComponentTemplate',
        mixins:[], //mixin
        // compose new components
        directives:{},//directive 등록
        // 컴포넌트가 다른 컴포넌트를 사용할 경우
        components: {},
        // 컴포넌트 어트리뷰트 그룹
        props: {
           value: {
                type: Number,
                default: 0,
            }
        },
        // 컴포넌트 변수 그룹
        data() {
            return{
                msg:"",
            }
        },
        computed: {
            sample () { return this.value } // 내부 변수가 업데이트 되면 자동으로 반영 됩니다. watch 와 많이 비교 됩니다.
        },
        // 컴포넌트 메서드 그룹
        watch: {
            // 새로운 값 과 이전 값을 을 파라미터로 넣어 줍니다. computed 와 많이 비교 합니다. 차이는 computed 는 값이 같으면 캐쉬된 값을 반환 하기에 리소스를 적게 사용한다고 써있습니다.
            value (newVal, oldVal) { console.log('template::watch::value::', newVal, oldVal, this) }
        },
        created() {
            console.log('created::')
            // api 호출
        },
        mounted() {
            this.$nextTick(function () {
                // 모든 화면이 렌더링된 후 실행합니다.
            });
        },
        // 함수
        methods: {
            getMsg () {
                return this.msg
            }
        },
        beforeDestroy() {}
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
