function pintarpiramide(){
    let num = document.getElementById("numero").value;
    for (i=1;i<=num;i++){
        let linea="";
        for(j=1;j<=i;j++){
            linea+="*";
        }
        console.log(linea);
    };
};