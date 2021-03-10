<template>
  <div class="common_area">
    <ul class="community-area">
      <li class="community-item" @clickList="readMore">
        <div class="info">
<!--          <input type="file">-->
          <profile-img></profile-img>
          <p class="user-name">Joshua</p>
          <span class="upload-date">2021.01.04</span>
        </div>
        <p class="text-box ellipsis3">무겁다는 생각을 즉시 머릿속에서 지운다. 생각이 많으면 고통뿐인 스쿼트를 해낼 수 없다. 내가 해야 할 생각은 할 수 있다는 생각뿐이다. 그저 내려갔다 올라오면 그만이다. 다시 한번 숨을 크게 들이마시고 입을 앙다문다. 견고한 등을 믿는다. 그리고 내려간다. 두 무릎 사이로 천천히 들어가는 골반. 팽팽히 당겨지는 둔근과 햄스트링이 느껴진다. 더, 조금만 더. 깊이가 충분하지 못하다면 그건 스쿼트가 아니다. 엉덩이가 무릎 아래로 내려가는 그 순간, 팽팽히 당겨진 둔근을 힘껏 수축한다. 둔근은 엔진과 같다. 구덩이에 빠진 차를 빼내기 위해 미친 듯이 도는 엔진처럼 미친 듯이 둔근이 수축한다.</p>
      </li>
    </ul>
  </div>
</template>

<script>

  import ProfileImg from "../../components/ui/ProfileImg";
  export default {
    name: 'DetailPost',
    data() {
      return {

      }
    },
    components: {
      ProfileImg
    }
  }
</script>

<style lang="scss" scoped>
    .community-area {
        padding: 0 4vw;
        .community-item {
            border-bottom: 1px solid #dddddd;
            padding: 12px 0;
            .info {
                display: flex;
                align-items: center;
                .upload-date {
                    margin-left: auto;
                }
            }
            .text-box {
                padding-top: 12px;
            }
        }
    }
</style>
