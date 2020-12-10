<template>
  <div class="hello">
      <div class="hello">
    <p>省市两级联动</p>
    <div>
        <select id="pro1"></select>
        <select id="city1"></select>
    </div>
    <p>省市区三级联动</p>
    <div>
        <select id="pro"></select>
        <select id="city"></select>
        <select id=area></select>
    </div>
  </div>
  </div>
</template>

<script>
import PsionPlugins from '../../../../dist/index.esm';
export default {
  name: 'Address',
  mounted() {
    const { Address } = PsionPlugins
    new Address({
      pro: document.querySelector('#pro1'),
      city: document.querySelector('#city1'),
    });
    new Address({
      pro: document.querySelector('#pro'),
      city: document.querySelector('#city'),
      area: document.querySelector('#area'),
      defaultPro: '浙江省',
      defaultCity: '杭州市',
      defaultArea: '淳安县',
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
select {
  height: 30px;
  border-radius: 4px;
  color: #333;
}
</style>
