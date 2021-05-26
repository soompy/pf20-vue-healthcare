<template>
  <div class="card">
    <div class="wrap">
      <div class="front">
        <div class="street"></div>
        <img class="bycicle" src="https://100dayscss.com/codepen/bycicle.svg" alt="Bicycle">
      </div>
      <div class="back">
        <div class="sky"></div>
        <img class="car" src="https://100dayscss.com/codepen/helicopter.svg" alt="Helicopter">
      </div>
    </div>
  </div>
</template>

<script>



  export default {
    name: 'CardTicket',
    data() {
      return {

      }
    },
    components: {

    },
  }
</script>

<style lang="scss" scoped>
    .cp_common_area {top: 70px;}

    .bike, .car {
      position: relative;
      padding-top: 35px;
      animation: driving 0.7s infinite linear alternate;
    }

    .street, .sky {
      position: absolute;
      bottom: 0;
      width: 100%;
      overflow: hidden;    //this!!
    }
    .street {
      height: 42px;
      background: #3b3b3b;
      border-radius: 0 0 12px 12px;
    }
    .sky {
      height: 150px;
      background: #ededed;
      border-radius: 12px;
    }
    .road,
    .cloud {
      position: absolute;
      height: 1px;
      border-radius: 1px;
    }

    // turn card
    .card, .wrap{
      position: relative;
      width: 300px;
      height: 150px;
      border-radius: 12px;
      perspective: 350px;           //원근법 ,transform과 같이 사용
    }
    .wrap {
      transition: 1.5s;
      transform-style: preserve-3d; //부모의 효과가 -> 자식에게 3d효과로 작용
    }

    .back, .front {
      -webkit-backface-visibility: hidden; //브라우저 호환성
      backface-visibility: hidden;
    }

    // hover
    .card {
      &:hover .wrap{
        transform: rotateX(180deg);
      }
    }

    // random value
    $total: 15;

    @for $i from 1 to $total {
      .road_#{$i} {
        top: random(35) + px;
        right: 0;
        width: random(50) + px;
        border-bottom: random(2) + px solid #dbdbdb;
        transition: 3s;
        animation: bottom random(40) * 0.1 + 0.3 + s linear infinite;
      }
      .cloud_#{$i} {
        top: random(150) + px;
        right: 0;
        width: random(50) + px;
        border-bottom: random(2) + px solid #cfcfcf;
        transition: 3s;
        animation: bottom random(40) * 0.1 + 0.3 + s linear infinite;
      }
    }


    // animation
    @keyframes driving {
      0% {
        margin-top: 5px;   //위아래 움직이기
        transform: scaleY(0.95) skew(1deg);  //크기조절 & 기울기
      }
      100% {
        margin-top: 0px;  //위아래 움직이기
      }
    }

    @keyframes bottom {
      100% {
        right: 300px;
      }
    }
</style>

<script>
  // https://velog.io/@gicomong/reverse-card
  const street = document.querySelector('.street');
  for(let i = 0; i < 15; i++) {
    const newDiv = document.createElement('div');
    newDiv.className = `road road_${i}`;
    street.appendChild(newDiv);
  }

  const sky = document.querySelector('.sky');
  for (let i=1; i<15; i++) {
    const newDiv = document.createElement("div");  //div 추가
    newDiv.className = `cloud cloud_${i}`;    //div에 class명 지정
    sky.appendChild(newDiv);                  //자식으로 추가
  }
</script>
