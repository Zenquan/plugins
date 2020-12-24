// import provinceList from './address'

class Address {
  constructor(options) {
    this.pro = options.pro;
    this.city = options.city;
    this.area = options.area;
    this.defaultPro = options.defaultPro || '北京市';
    this.defaultCity = options.defaultCity || '北京市';
    this.defaultArea = options.defaultArea || '东城区';
    this.proList = [];
    this.cityList = [];
    this.areaList = [];
    this.init();
  }

  init() {
    var _this = this;
    this.initPro();
    this.initCity();
    if (this.area) {
      this.initArea();
    }
    this.pro.onchange = function () {
      _this.changePro(_this, this);
    }
    this.city.onchange = function () {
      var index = this.selectedIndex;
      _this.changeCity(_this, this, index);
    }
  }
  // 公共
  cal(oFrag, arr, list) {
    arr.forEach(function (item, arr, index) {
      var option = document.createElement('option');
      option.innerHTML = item.name ? item.name : item;
      oFrag.appendChild(option);
    })
    list.appendChild(oFrag);
  }
  // 市计算
  calCity(_this, index2, index1) {
    if (this.isCenteral()) {
      _this.areaList = [];
      provinceList[index2]['cityList'].forEach(function (item, arr, index) {
        _this.areaList.push(item.name)
      })
    } else {
      _this.areaList = _this.cityList[index1]['areaList'];
    }
  }
  // 判断是否为直辖市
  isCenteral() {
    return this.cityList[0]['areaList'] === undefined;
  }

  // 初始化省
  initPro() {
    var oFrag = document.createDocumentFragment();
    this.proList = provinceList;
    this.pro.innerHTML = '';
    this.cal(oFrag, this.proList, this.pro);
    this.pro.value = this.defaultPro;
  }

  // 市初始化
  initCity() {
    var index = this.pro.selectedIndex,
      _this = this,
      oFrag = document.createDocumentFragment();
    this.city.innerHTML = '';
    this.cityList = provinceList[index]['cityList'];
    if (this.isCenteral()) {
      this.cityList = [{
        name: provinceList[index]['name']
      }];
    }
    this.cal(oFrag, this.cityList, this.city);
    this.city.value = this.defaultCity;
  }

  // 初始化区
  initArea() {
    var index = this.pro.selectedIndex,
      _this = this,
      oFrag = document.createDocumentFragment();
    this.area.innerHTML = '';
    this.calCity(_this, index, 0);
    this.cal(oFrag, this.areaList, this.area);
    this.area.value = this.defaultArea;
  }

  // 改变省
  changePro(_this, that) {
    // 选中的索引
    var index = _this.pro.selectedIndex,
      oFrag = document.createDocumentFragment();
    _this.city.innerHTML = '';
    _this.cityList = provinceList[index]['cityList'];
    if (_this.isCenteral()) {
      this.cityList = [{
        name: provinceList[index]['name']
      }];
    }
    _this.cal(oFrag, _this.cityList, _this.city);
    if (_this.area) {
      this.changeCity(_this, that, 0, index);
    }
  }

  // 改变市
  changeCity(_this, that, index1, index2) {
    // 选中的索引
    var index = index,
      oFrag = document.createDocumentFragment();
    _this.calCity(_this, index2, index1);
    if (_this.area) {
      _this.area.innerHTML = '';
      _this.cal(oFrag, _this.areaList, _this.area);
    }
  }
}

// export default Address;
