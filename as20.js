function createCounter(){
    let count=0;
    return{
        increment:function(){
            count++;
            console.log(`current count ${count}`);
        },
        decrement:function(){
            count--;
            console.log(`current count ${count}`);
        },
        getcount:function(){
            count++;
            console.log(`current count ${count}`);
        }
    };
}
const counter = createCounter();
counter.increment(); // Output: Current count: 1
counter.increment(); // Output: Current count: 2
counter.decrement(); // Output: Current count: 1
