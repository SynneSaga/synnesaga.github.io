   // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
   // TODO: Add SDKs for Firebase products that you want to use, trenger disse for alle tingene du vil bruke fra firebase
   import { getFirestore, addDoc, collection, setDoc, doc, getDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";
   
   // https://firebase.google.com/docs/web/setup#available-libraries
 
   // Your web app's Firebase configuration
   const firebaseConfig = {
     apiKey: "AIzaSyAlakcOU0nlI22XCl7i1TR84m1cLnx5WSA",
     authDomain: "elevliste-b1ce7.firebaseapp.com",
     projectId: "elevliste-b1ce7",
     storageBucket: "elevliste-b1ce7.appspot.com",
     messagingSenderId: "335944769411",
     appId: "1:335944769411:web:0525edce59c4e1c1f9e0b6"
   };
 
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const db = getFirestore();
  

   //setDoc() er en annen måte å opprette nye dokumenter i databasen. setDoc() gir deg muligheten til å definere en egen primærnøkkel for hvert dokument i databasen. setDoc() brukes i kombinasjon med doc() for å angi hvor dokumentet skal lagres i databasen, og hva som skal være primærnøkkelen. setDoc() er en funksjon for å skrive data til en spesifikk ID i databasen.
   //Denne funksjonen tar inn to parametere; hvilket dokument dataen skal skrives til (angitt med ID) og hvilken data som skal skrives, slik: setDoc(_DOCUMENT_, _DATA_);
   //Hvis det allerede er et dokument med samme primærnøkkel, skrives dette over
   await setDoc(doc(db, "elever", "sanmol"), {
       fornavn:"san",
       etternavn:"mol",
       telefon:10292839,
       epost:"sanmol.hei"
   })
   //denne er nå lagret under -sanmol-, istedenfor en unik id full i tall. 



   //HENTE INFORMASJON FRA DATABASEN, via getDoc og getDocs
   //getDoc henter ut ett dokument, trenger id'en til dokumentet
   const elgato = await getDoc(doc(db, "elever", "sanmol"));
   console.log("Data til snadder: ", elgato.data())

   const losgatos = await getDocs(collection(db,"elever"));
   losgatos.forEach((doc) => {
       console.log(doc.data().fornavn,doc.data().etternavn)
   })


   //HENTE UT UTVALGTE DOKUMENTER I EN SAMLING, med query()
   //Med query() kan vi lage spørringer mot databasen. En spørring er en betingelse for å filtrere, begrense eller sortere dataene som skrives ut.
   //For å lage en spørring kan vi bruke funksjonene where(), orderBy(), startAt(), startAfter(), endAt(), limit() eller limitToLast().
   //query(collection(db, "elever"), orderBy("etternavn")); //Hente ut alle sortert på etternavn
   //query(collection(db, "elever"), where("epost", "!=", "undefined")); //Hente ut alle elever som er registrert med mail

   const queryTing = await getDocs(query(collection(db, "elever"), where("epost", "!=", "undefined")));
   queryTing.forEach((doc) => {
   console.log(doc.data().fornavn, doc.data().etternavn, doc.data().epost); //[Fornavn] [Etternavn] [Epost]
   });
