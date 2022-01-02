const counter=document.getElementById('counter');
const btns= document.querySelectorAll('.btn');
//console.log(btns);

let count=0;

btns.forEach((btns)=>{
    btns.addEventListener('click',(e)=>{
        const styles= e.currentTarget.classList;
        if(styles.contains('increase')){
           count++;
        }

       else if(styles.contains('decrease')){
           count--;
       }
       else if(styles.contains("reset")){
           count=0;
       }

       if(count>0){
           counter.style.color='green';
       }

       else if(count<0){
           counter.style.color='red';
       }
       else{
           counter.style.color='grey';
       }

        counter.textContent=count;
        
    })
})