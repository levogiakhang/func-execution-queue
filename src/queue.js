export function queue(func, waitTime) {
	let funcQueue = [];
	let isWaiting;

	let executeFunc = function (params) {
		isWaiting = true;
		func(params);
		setTimeout(play, waitTime);
	};

	let play = function () {
		isWaiting = false;
		if (funcQueue.length) {
			let params = funcQueue.shift();
			executeFunc(params);
		}
	};

	return function (params) {
		if (isWaiting) {
			funcQueue.push(params);
		} else {
			executeFunc(params);
		}
	}
}