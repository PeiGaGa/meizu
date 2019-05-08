var $form = document.querySelector('#form')
var $pAll = $form.querySelectorAll('p');
var $username = $form['username']
var $paserward = $form['paserward']
var $telephone = $form['telephone']
var $btn_zc = document.querySelector('#btn_zc');
$username.onblur = function () {
    var $p = this.nextElementSibling
    if (this.value == '') {
        $p.innerHTML = '内容不能为空';
        $p.className = 'bg-danger';
        return;
    }
    var reg = /^[A-Za-z_]{6,10}$/
    if (reg.test(this.value)) {
        $p.innerHTML = '验证成功';
        $p.className = 'bg-success';

    } else {
        $p.innerHTML = '格式错误,只能是6-10位,且只能是英文或者下划线';
        $p.className = 'bg-danger';
    }
}
$paserward.onblur = function () {
    var $p = this.nextElementSibling
    if (this.value == '') {
        $p.innerHTML = '内容不能为空';
        $p.className = 'bg-danger';
        return;
    } else{
    }
    
}
$telephone.onblur = function () {
    
}

$btn_zc.onclick = function () {
    
    alert('全部验证成功')
}
