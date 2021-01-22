


                         // Part-1: Code for Unit Convert kilometer to meter //  

function kilometerToMeter (kilometer){
    var meter = kilometer * 1000;              // we know, 1 kilometer = 1000 meter // 
    return meter; 

} 

var result= kilometerToMeter(1);
 

 
                        // Part-2: Code for budgetCalculator  //  


 
    // Calculation for watch cost //

 function watch  (quantityOfWatch){
    var totalWatchPrice =  quantityOfWatch * 50;                // we know, per watch is 50 BDT or USD // 
    return totalWatchPrice;

} 

var totalWatchPrice= watch(1);
 

  // Calculation for phone cost //

 function phone  (quantityOfPhone){
    var totalPhonePrice =   quantityOfPhone * 100;                // we know, per phone is 100 BDT or USD // 
    return totalPhonePrice;

} 

 

 // Calculation for laptop cost //

 function laptop  (quantityOfLaptop){
   var totalLaptopPrice =   quantityOfLaptop * 500;                // we know, per laptop is 500 BDT or USD// 
   return  totalLaptopPrice;

} 

var totalLaptopPrice= laptop(1);
 
var budgetCalculator =  totalWatchPrice  + totalPhonePrice  + totalLaptopPrice;        // Sub total cost // 

 
 
 
 

  
   




