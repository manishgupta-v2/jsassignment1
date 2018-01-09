/*
Print Patten
    1
   111
  11111
 1111111
111111111

*/

var n=5, i, j;
        
for (i=0; i<n; i++){

    for (j=0; j<n-i-1; j++){
        process.stdout.write(" ");
    }

    for (j=0; j<=2*i; j++){
        process.stdout.write("1");
    }
    
    console.log();
}

