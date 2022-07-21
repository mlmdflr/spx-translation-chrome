<template>
  <div class="main_app">
    <ul class="om-nav">
        <li class="om-nav-item">
            <a href="./options.html" target="_blank" id="js-option" role="button">
                <span id="js-option-label">设置</span>
            </a>
        </li>
        <li class="om-divider"></li>
        <li class="om-nav-item">
            <a href="https://translate.google.cn/" target="_blank" id="js-option" role="button">
                <span id="js-option-label">go to cn</span>
            </a>
        </li>
        <li class="om-nav-item">
            <a href="https://translate.google.com/" target="_blank" id="js-option" role="button">
                <span id="js-option-label">go to com</span>
            </a>
        </li>
        <li class="om-divider"></li>
        <li class="om-nav-item">
            <a href="https://mlmdflr.cc/ggdoc" target="_blank" id="js-option" role="button">
                <span id="js-option-label">关于</span>
            </a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'popupView',
  data () {
    return {
      msg: 'popup'
    }
  }
}

</script>

<style>
@import './css/nes.css';
</style>
