/*
Print Patten
         1
        232
       34543
      4567654
     567898765
    67890109876
*/

var n=5, i, j;
            
for (i=0; i<n; i++) //outer loop
{
    var count = 0; var tempi=i;
    for (j=0; j<n-i-1; j++)   //inner loop
    {
        process.stdout.write(" ");
        count = count + 1;
    }
    
    for (j=count; j<n; j++)   //inner loop2
    {    
        tempi = tempi + 1;
        process.stdout.write(""+tempi);
    }

    for (j=n+1; j<count; j++)   //inner loop3
    {   
        process.stdout.write(" ");
        tempi = tempi + 1;
    }

    console.log();
}