/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
  function createCounter(init) {
    let x = init
    return{
    increment :function (){
        x+=1;
        return x;
    },
      reset:function (){
        x=init
        return x;
    },
     decrement:function (){
         x-=1;
        return x;
    }
    } 
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */