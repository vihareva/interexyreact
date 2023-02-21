
onmessage = (e) => {
    console.log(e);

    function fibonacci(num:number):number {
        if (num < 2) {
            return num
        }
        return fibonacci(num - 1) + fibonacci(num - 2)
    }
    postMessage(fibonacci(e.data));
};

export {};