
const A_hw = require('./hw.json');
// all data in file
console.log(A_hw);
//-------------------------------------------------------------//
// 1- All batter types 
function batter_type(){
      for (let i = 0; i <= A_hw.length; i++) {
            for (let b = 0; b <= A_hw[i].batters.batter.length; b++) {
                  console.log( "All batter types : "+ A_hw[i].batters.batter[b].type);


}}}   
batter_type();
//--------------------------------------------------------//
// 2- ALL topping type 
function topping_type(){
      for (let i = 0; i <= A_hw.length; i++) {
            for (let b = 0; b <= A_hw[i].topping.length; b++) {
                  console.log( "All topping types : "+ A_hw[i].topping[b].type);


}}} 
topping_type();   
//---------------------------------------------------//
// 3- Ppu sum
let sum = 0; 
function Ppu_sum(){
      for (let i = 0; i <= A_hw.length; i++) {
       sum+= A_hw[i].ppu;
       console.log( " Ppu sum: "+ sum);

}
}
Ppu_sum(); 
//---------------------------------------------------//
// 4- Ppu  average 
let sum = 0; 
function Ppu_average(){
      for (let i = 0; i <= A_hw.length; i++) {
          sum+= A_hw[i].ppu; 
          console.log( " Ppu average: "+ sum/A_hw.length);

}}
Ppu_average (); 
//--------------------------------------------------------//
// 5- List of all mentioned IDs regardless to the type
// ID of array 
 function ID_array1(){
      for (let i = 0; i <= A_hw.length; i++) {
          console.log( " all_ID: " +A_hw[i].id );
      }}
ID_array1();
//--------------------------------------------------------//
// ID topping 
function IDs_topping(){
      for (let i = 0; i <= A_hw.length; i++) {
            for (let b = 0; b <= A_hw[i].topping.length; b++) {
               console.log( "All topping ID : "+ A_hw[i].topping[b].id);

}}}
IDs_topping();
//--------------------------------------------------------//    
// ID batter 
function ID_batter(){

      for (let i = 0; i <= A_hw.length; i++) {
            for (let b = 0; b <= A_hw[i].batters.batter.length; b++) {
                  console.log( "All batter ID : "+ A_hw[i].batters.batter[b].id);

            }}}
ID_batter(); 
//----------------------------------------------------------//
