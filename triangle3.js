/*
Print Patten
     1 
    1 1 
   1 2 1 
  1 3 3 1 
 1 4 6 4 1

*/

var n=4, i, j, k;

for (i=0; i<n; i++) 
{
    for (j=0; j<n-i; j++) 
    {
        process.stdout.write(" ");
    }
    var num=1;
    for (k=0; k<=i; k++) 
    {
        process.stdout.write(num+" ");
        num=num*(i-k)/(k+1);
    }
    console.log();
}