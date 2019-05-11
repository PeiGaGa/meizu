	//封装cookie的操作
	//设置
	function setCookie(k,v,day){
		//传递两个参数，不设置有效期
		if(arguments.length == 2){
			document.cookie = k+"="+v
		}

		//传递三个参数，设置有效期
		if(arguments.length == 3){
			var date = new Date();
			date.setDate( date.getDate() + day );
			document.cookie = k+'='+v+";expires="+date;
		}
	}

	//获取
	function getCookie(k){
		var strCookie = document.cookie;
		if(strCookie == ''){
			return '';
		}
		var arrCookie = strCookie.split('; ');
		for(var i=0; i<arrCookie.length; i++){
			var item = arrCookie[i].split('='); //[k,v]
			if(item[0] == k){
				return item[1];
			}
		}
	}

	//删除指定的cookie
	function removeCookie(k){
		setCookie(k,'',-1);
	}