//可以让另一个JS调用这里的函数
!$(function () {
  //获取cookie的用户名
  var getCookie = window.getCookie = function (name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
      return unescape(arr[2]);
    else
      return null;
  };

  //删除cookie的用户名
  var delCookie = window.delCookie = function (name) {
    var _this = this;
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = _this.getCookie(name);
    if (cval != null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  };

  //添加Cookie
  var addCookie = window.addCookie = function (item, value, dayCount) {
    var d = new Date();
    if (dayCount == undefined || dayCount == 0) {
      d.setDate(d.getMinutes() + 10);
    } else {
      d.setDate(d.getDate() + dayCount);
    }
    document.cookie = item + "=" + escape(value) + ";expires=" + d.toGMTString();
  }
  //读取网址 给网址后面加一个search 用于页面点击登录后跳转到登录页面，登陆成功跳回到本页面
  var url = window.url = function (ele) {
    var href = $(ele).attr('href'); //获取点击后跳转的网址
    var url = window.location.href; // 获取当前的网址
    $(ele).attr('href', href + '?redirect=' + url); //拼接
  }
})