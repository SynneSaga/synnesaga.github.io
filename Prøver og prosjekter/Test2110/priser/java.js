function priser() {
    let arrayButikk =     [40,60,27,32,63,52,72,18,38,55];

    let arrayKonkurrent = [43,55,30,29,63,50,69,21,38,57];
    
    for(var i=0; i<arrayButikk.length; i++)
    
    if(arrayButikk[i]<arrayKonkurrent[i]){
        console.log("Vi er billigere enn konkurrenten")
        //document.getElementById("utskriftPriser").innerHTML += "<th>" +  "Vare nr. " + (i+1)  + "</th>" + "<td>" + "Vi er billigere enn våre konkurrenter!" + "</td>" + "<td>" + "Vi koster " + arrayButikk[i] + " og de koster " + arrayKonkurrent[i] + "</td>";
        
    }
    else if(arrayButikk[i]>arrayKonkurrent[i]){
        console.log("Vi er dyrere enn konkurrenten")
        //Fraktpris er 3 kr.
        let nyPris = Math.abs(arrayKonkurrent[i]-3);
        document.getElementById("utskriftPriser").innerHTML += "<li>" +  "Vare nr. " + (i+1)  + "<ul>" + "<li>" + "Vi er dyrere enn våre konkurrenter!" + "</li>"+ "<li>" + "Vi koster " + arrayButikk[i] + " og de koster " + arrayKonkurrent[i] + "</li>" + "<li>" + "Ny pris er: " + nyPris + "</li>" + "</ul>" + "</li>";
        document.getElementById("utskriftTabell").innerHTML += "<tr>" + "<th>" +  "Vare nr. "  + "</th>" + "<th>" +  "Gammel pris"  + "</th>"+ "<th>" +  "Ny pris"  + "</th>" + "</tr>" + "<tr>" + "<td>" + (i+1) + "</td>" + "<td>" + arrayButikk[i] + "</td>" + "<td>" + nyPris + "</td>" + "</tr>";
        

    }
    else if(arrayButikk[i]==arrayKonkurrent[i]){
        console.log("like priser")
    }
    else{
        console.log("noe er galt...")
    }
    /*for (let hver of diffPris) {
        document.getElementById("utskriftPriser").innerHTML += "<td>" + hver + "</td>";
    }*/
}

