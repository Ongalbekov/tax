

let inputLabel=document.querySelector('#inputLabel');
let nettotoBrutto=document.querySelector('#nettotobrutto');
let bruttotoNetto=document.querySelector('#bruttotonetto');
let labelInput=document.querySelector('#labelInput');
let mw19=document.querySelector('#mw19');
let betrag=document.querySelector('#betrag');
let mw7=document.querySelector('#mw7');
let mwBetrag=document.querySelector("#mwbetrag");
let bruttobetrag=document.querySelector('#bruttobetrag')


mw=()=>{
if(nettotoBrutto.checked){
    labelInput.innerHTML='Nettobetrag(Preis ohne Mehrwertsteuer) in Euro*';
}
else if(bruttotoNetto.checked){
    labelInput.innerHTML='Bruttobetrag(Preis inklusive Mehrwertsteuer) in Euro*'
}
}
rechner=()=>{
    event.preventDefault();
    let eingabe= document.querySelector('#amountInput').value;
    if(mw19.checked && nettotoBrutto.checked){
        betrag.innerHTML='Bruttobetrag (Endpreis)';
        let total=`${eingabe * 0.19}`;
        mwBetrag.innerHTML=`${total} €`;
        bruttobetrag.innerHTML= (eingabe*1.19).toFixed(2);
    }
    else if(mw19.checked && bruttotoNetto.checked){
        betrag.innerHTML='Nettobetrag';
        let total=`${(eingabe / 1.19*0.19).toFixed(2)}`;
        mwBetrag.innerHTML=`${total} €`;
        bruttobetrag.innerHTML= (eingabe/1.19).toFixed(2);
    }
    else if(mw7.checked && nettotoBrutto.checked){
        betrag.innerHTML='Bruttobetrag (Endpreis)';
        let total=`${(eingabe * 0.07).toFixed(2)}`;
        mwBetrag.innerHTML=`${total} €`;
        bruttobetrag.innerHTML= (eingabe*1.07).toFixed(2);
    }
    else if(mw7.checked && bruttotoNetto.checked){
        betrag.innerHTML='Nettobetrag';
        let total=`${(eingabe / 1.07*0.07).toFixed(2)}`;
        mwBetrag.innerHTML=`${total} €`;
        bruttobetrag.innerHTML= (eingabe/1.07).toFixed(2);
    }
}






