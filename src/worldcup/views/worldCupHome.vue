<template>
  <div class="routParent">

    <videoPlayer ref="player" v-if="!showPlayer"></videoPlayer>
    <loading v-if="loading == true && osType == 0"></loading>

  </div>
</template>

<script>
import videoPlayer from '../components/video/videoPlayer'
import func from '../mixins/mixin'
import {mapGetters, mapMutations, mapActions} from 'vuex'
import {ROAST_CONFIG} from "../js/config";
import router from '../router/index'
import axios from 'axios'
import loading from '../components/loading/loading'

export default {
  name: "worldCupHome",
  components: {videoPlayer, loading},
  mixins: [func],
  data() {
    return {
      showPlayer: ROAST_CONFIG.DEVELOP_MODE,
      currentName: 'menuRout',
      loading: false,
      getResponse: 0,
      osType: ROAST_CONFIG.OS_TYPE,

    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    if (ROAST_CONFIG.OS_TYPE) {

    }
    router.beforeEach((to, from, next) => {
      this.currentName = to.name;

      next();
    });
  },

  methods: {

    up() {


    },
    down() {

    },
    left() {


    },
    right() {


    },
    enter() {


    },
    back() {
      this.handleExit();
    },
    done() {
    },
    cancel() {

    },

    exit() {
      this.handleExit();
    },

  }
}
</script>

<style scoped>
@import "../styles/styles.css";
@import "../styles/bootstrap.min.css";

.routParent {
  position: fixed;
  top: 0px;
  right: 0px;
  width: 1920px;
  height: 1080px;
  direction: rtl;
  display: flex;
  display: -webkit-flex !important;
  /*border: 1px solid red;*/

}

@font-face {
  font-family: 'BYekan';
  font-weight: normal;
  font-style: normal;
  /*font-size: 18px;*/
  src: url('../assets/font/BYekan.ttf');
}

body, input, select, label, div, span, p {
  font-family: "BYekan" !important;
}

:focus {
  outline: -webkit-focus-ring-color auto 0px !important;
}

.hg-theme-default .hg-row {
  display: -webkit-flex !important;;
}

.hg-row {
  display: -webkit-flex !important;;
}
</style>
