//ajax-get请求
var senAjax = function (url, options) {
	//初始化数据
	var _default = {
        method: "get",
        async: true,
        data: null,
        success: null
	};
	for (var key in options) {
        if (options.hasOwnProperty(key)) {
            _default[key] = options[key];
        }
    }
	//1.创建ajax对象
	var xhr = new XMLHttpRequest();
	//2.给onreadystatechange绑定监听函数，用来感知ajax对象状态的改变
	xhr.open(_default["method"], url, _default["async"]);
	xhr.onreadystatechange = function () {
		//判断ajax的状态是否等于4，且状态码等于200
		if (xhr.readyState == 4 && xhr.status == 200) {
			var data = xhr.responseText;
            _default["success"] && _default["success"](data);
		}
	}
	//3.建立一个http链接
	xhr.open(_default["method"], url, _default["async"]); //true是异步， false同步
	//4.发起请求
	xhr.send(_default["data"]);
}