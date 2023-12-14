// const inputFields = [];
// function InputFields () {
//     this.inputField=inputField;
// }
var carNumber = 0;
var table=`
<form>
<table>
<tr>
<td><input type="number" id="carNumber" placeholder="car number"/></td>
</tr>`

for (var index=0; index<6; index++) {
   table+=`<tr>
   <td><input type="text"/></td>
   </tr>`
}
table+=`
<tr>
<td><input type="button" value="submit" id="carNumberEnter"/> <input type="reset" value="reset"/></td>
</tr>
</table>
</form>`

document.getElementById("mySite").innerHTML = table;

document.getElementById("carNumberEnter").addEventListener("click",()=>{
    carNumber = document.getElementById("carNumber").value;
});