const work = (str)=>{
    let value = 0
      , cnt = 0;
    for (let item of str) {
        if (item === '(') {
            value++;
        }
        if (item === ')') {
            value--;
            if (value < 0) {
                if (cnt)
                    cnt--,value++;
                else
                    return false;
            }
        }
        if (item === '*') {
            cnt++;
        }
    }
    if (cnt >= value)
        return true;
    return false;
}
console.log(work('(()'))
console.log(work('((*)'))
console.log(work('(((((*)'))
console.log(work('((((((*)'))
console.log(work('((*****((((*)'))
console.log(work('((**))))*****((((*)'))