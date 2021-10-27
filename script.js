function content(num){
    for (let i=1;i<=5;i++){
        if(i !== num){
            document.getElementById(i).style.display = 'none';

        }else{
            document.getElementById(num).style.display = 'block';
            document.getElementById(num+'button').classList.add("active");
        }
    }
}