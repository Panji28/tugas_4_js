function tinggiBadan(){
    var x = 140;
    var y = 120;
    var z = 100;
    console.log(typeof(x,y,z))

    if(x > 120){
        console.log("Tinggi");
    
    }else if(y < 140){
        console.log("sedang");
    }else if(z < 120){
        console.log("pendek");
    }else{
        console.log("tidak ada nilai");
    }
}



tinggiBadan();