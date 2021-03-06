// import _ from 'lodash';
// import printMe from './print.js';
// import './styles.css';
import { cube } from './math.js';
console.log(process.env.NODE_ENV);
//任何位于 /src 的本地代码都可以关联到 process.env.NODE_ENV 环境变量
if (process.env.NODE_ENV !== 'production') {
 	console.log('Looks like we are in development mode!');
}

function component() {
    // var element = document.createElement('div');
    // var btn = document.createElement('button');
    //
    var element = document.createElement('pre');

    //lodash 是由当前 script 脚本 import 导入进来的
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

 //    btn.innerHTML = 'Click me and check the console!';
	// btn.onclick = printMe;

	// element.appendChild(btn);
	//
	element.innerHTML = [
	    'Hello webpack!',
	    '5 cubed is equal to ' + cube(10)
	].join('\n\n');

    return element;
}

// let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(component());

// if(module.hot){
// 	module.hot.accept('./print.js', function() {
//      	console.log('Accepting the updated printMe module!');
//      	document.body.removeChild(element);
// 	    element = component(); // 重新渲染页面后，component 更新 click 事件处理
// 	    document.body.appendChild(element);
//    	});
// }