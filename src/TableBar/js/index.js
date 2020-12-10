const tabSwitch = (id, oBtn) => {
    let oDiv = document.getElementById(id);
    this.aBtn = oDiv.getElementsByTagName('input');
    this.aDiv = oDiv.getElementsByTagName('div');
    for (var i = 0; i < this.aBtn.length; i++) {
        this.aBtn[i].className = '';
        this.aDiv[i].style.display = 'none';
    }
    oBtn.className = 'active';
    console.log('>>>', this.aDiv, oBtn);
    this.aDiv[oBtn.i].style.display = 'block';
}

const attribute = (id, btn, div, fn) => {
    /*------------------------attribute--------------------------*/
    let oDiv = document.getElementById(id);
    this.aBtn = oDiv.getElementsByTagName(btn);
    this.aDiv = oDiv.getElementsByTagName(div);

    let _this = this;
    for (let i = 0; i < this.aBtn.length; i++) {
        this.aBtn[i].index = i;
        this.aBtn[i].addEventListener('click', function () {
            _this.fn(id, this);
        }, false)
    }
}

//there is a bug
attribute('div1', 'input', 'div', tabSwitch('div1', this));
