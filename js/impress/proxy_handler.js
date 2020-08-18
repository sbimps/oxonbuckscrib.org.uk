	function call_proxy(form){
		var url = loc+"tools/impress/proxy.ajax.php?action="+form.action.replace(loc,"");

		//var url = loc+"tools/impress/proxy.ajax.php?action=register";
		var params = "";
		for(i=0;i<form.length;i++){
			params += "&"+form.elements[i].name+"="+form.elements[i].value.replace(/&/g,"~").replace(/:/,"!");
		}

		params += "&token="+document.getElementById("token").value;
		//alert(url+params);

		var obj=new JSONscriptRequest(url+params);     
		obj.buildScriptTag();
		obj.addScriptTag();
	}

	function call_proxy_action(fld,action){
		var url = loc+"tools/impress/proxy.ajax.php?action="+action;
		var params = "&"+fld.name+"="+document.getElementById(fld.name).value.replace(/&/g,"~");

		params += "&token="+document.getElementById("token").value;

		var obj=new JSONscriptRequest(url+params);     
		obj.buildScriptTag();
		obj.addScriptTag();
	}

	function call_proxy_direct(action){
		var url = loc+"tools/impress/proxy.ajax.php?action="+action;
		var params = "&token="+document.getElementById("token").value;

		var obj=new JSONscriptRequest(url+params);     
		obj.buildScriptTag();
		obj.addScriptTag();
	}

	function call_proxy_action_with_value(fld,action,val){
		var url = loc+"tools/impress/proxy.ajax.php?action="+action;
		var params = "&"+fld.name+"="+document.getElementById(fld.name).value.replace(/&/g,"~");

		params += "&add_val="+val;

		params += "&token="+document.getElementById("token").value;

		var obj=new JSONscriptRequest(url+params);     
		obj.buildScriptTag();
		obj.addScriptTag();
	}

	function call_proxy_value(fld,val,action){
		//this allows a checkbox to pass an value (eg. an id) so the database can toggle the value
		var url = loc+"tools/impress/proxy.ajax.php?action="+action;
		var params = "&"+fld.name+"="+val.replace(/&/g,"~");

		params += "&token="+document.getElementById("token").value;

		var obj=new JSONscriptRequest(url+params);     
		obj.buildScriptTag();
		obj.addScriptTag();
	}

	function call_proxy_absolute_value(fld,val,action){
		//this allows a checkbox to pass an value (eg. an id) so the database can toggle the value
		var url = loc+"tools/impress/proxy.ajax.php?action="+action;
		var params = "&"+fld+"="+val;

		params += "&token="+document.getElementById("token").value;

		var obj=new JSONscriptRequest(url+params);     
		obj.buildScriptTag();
		obj.addScriptTag();
	}

	function return_proxy(data){
		if(!data[0]){
			if(data[1][0]=="database")
				alert(data[1][1]);
			else{
				for(i=0;i<data[1].length;i++){
					document.getElementById(data[1][i]).className = "error";

					//this is to ensure that the error is visible in Safari
					document.getElementById("label_"+data[1][i]).className = "error";
				}
			}
		}else{
			//alert(data[1]);
			eval(data[1]);
		}
	}

	function return_proxy_action(data){
		if(!data[0]){
			for(i=0;i<data[1].length;i++){
				document.getElementById(data[1][i]).className = "error";

				//this is to ensure that the error is visible in Safari
				document.getElementById("label_"+data[1][i]).className = "error";
			}

			eval(data[2]);
		}else{
			eval(data[1]);
		}
	}
