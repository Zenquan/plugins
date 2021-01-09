## psion-plugins

### 背景

>首先，一些项目中如果只是单纯需要一个插件，不需要引入相对庞大的库。其次，为了锻炼自己的原生js能力与一些设计模式能力。基于以上两个原因，就有了这个仓库的想法。再次，写成原生插件，就可以在任何前端框架里面使用了。

### 文档


#### 安装
```bash
npm i @jomsou/plugins -S
or
yarn add @jomsou/plugins -S
```

#### 引入

- 在原生中使用

```html
<script src="xx/dist/index.aio.js"></script>
<script>
    const { 
      Address,
    } = window['psion-plugins'];
<script>
```

- 在框架中使用

```js
import PsionPlugins from '@jomsou/plugins';
const { Address } = PsionPlugins
```

#### 城市联动器组件
<!-- - 效果
[两级联动和三级联动](https://zenquan.github.io/psion-plugins/test/Address/index.html) -->

- 使用
  - 两级联动
  ```js
  new address({
    pro: document.querySelector('#pro1'),
    city: document.querySelector('#city1'),
  });
  ```
  - 三级联动
  ```js
  new address({
    pro: document.querySelector('#pro'),
    city: document.querySelector('#city'),
    area: document.querySelector('#area'),
    defaultPro: '广东省',
    defaultCity: '深圳市',
    defaultArea: '罗湖区',
  });
  ```
*中间发现了select元素中可通过dom获取selectedIndex属性*
```js
 <select name="" id="test">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
  <script>
    var test = document.querySelector('#test');
    test.onchange= function() {
      console.log(this.selectedIndex);
    }
  </script>
```

#### Gesture 手势库

#### Swiper 轮播图组件

#### Flow 懒加载图片组件

#### TableBar tab切换组件

#### Responsive 响应式菜单栏组件