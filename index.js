var totalMl = document.getElementsByName("total_ml").value;
var totalBags = document.getElementsByName("total_bags").value;

function MilrinoneType1( total_ml, totalBags ){
    document.getElementsByName("total_UOS").value = totalMl * totalBags;
}

