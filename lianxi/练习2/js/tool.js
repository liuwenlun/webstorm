(function(w){
	
	w.gesture = function(node,callback){
			var flag = false;
			var stratC = 0;
			var startD = 0;
			//gesturestart:手指触碰当前元素，屏幕上有两个或者两个以上的手指
			node.addEventListener('touchstart',function(ev){
				var touch = ev.touches;				
				if(touch.length >= 2){
					flag = true;
					
					stratC = getC(touch[0],touch[1]);
					startD = getD(touch[0],touch[1]);
					
					if(callback&&callback['start']){
						callback['start']();
					};
					
				};					
			});
			//gesturechange手指触碰当前元素，屏幕上有两个或者两个以上的手指位置在发生移动
			node.addEventListener('touchmove',function(ev){
				var touch = ev.touches;				
				if(touch.length >= 2){
					var nowC = getC(touch[0],touch[1]);					
					ev.scale = nowC/stratC;
					
					var nowD = getD(touch[0],touch[1]);
					ev.rotation = nowD - startD;
					
					if(callback&&callback['change']){
						callback['change'](ev);
					};					
				};	
												
			})
			//gestureend:在gesturestart后, 屏幕上只剩下两根以下（不包括两根）的手指
			node.addEventListener('touchend',function(ev){
				var touch = ev.touches;	
				if(flag){
					if(touch.length < 2){
						if(callback&&callback['end']){
							callback['end']();
						};	
					}				
					
				};				
			})
						
		};
		
		//求线段距离
	w.getC = function (p1,p2){
			var a = p1.clientX - p2.clientX;
			var b = p1.clientY - p2.clientY;
			var c = Math.sqrt(a*a + b*b)
			
			return c;
		}
		
		//求角度
	w.getD = function (p1,p2){
			var X = p1.clientX - p2.clientX;
			var Y = p1.clientY - p2.clientY;
			//弧度
			var deg = Math.atan2(Y,X);
			//角度 = 弧度 * 180 / Math.PI
			
			deg = deg* 180 /Math.PI;
			
			return deg;
			
		}
		
	
	
	
	
})(window)
