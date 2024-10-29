function StatRnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function MimicRnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let Kardok=0
let Pancelok=0;
let Mimickek=0;
let Ercek=0;
let OsszErtek=0;

function Generalas()
{
    

    let LadaSZ= document.getElementById("ladaSZ").value
    let Szint=document.getElementById("Szint").value
    
    
for (let index = 0; index < LadaSZ; index++)
{
    let Stat=StatRnd(10,20)*Szint
    let lada= MimicRnd(1,10);
    let ladaErtek=""
    let Ertek=0
    let kep="";

    if (lada==1)
    {
        ladaErtek="Mimic"
        Ertek=Stat*-10
        kep="mimic.png"
        Mimickek+=1
    }
    else if(lada==2 || lada==3 || lada==4)
    {
        ladaErtek="Kard"
        Ertek=Stat*100
        kep="kard.jfif"
        Kardok+=1
        OsszErtek+=Ertek
    }
    else if(lada==5 || lada==6 || lada==7)
    {
        ladaErtek="Páncél"
        Ertek=Stat*100
        kep="mellvert.jpg"
        Pancelok+=1
        OsszErtek+=Ertek
    }
    else if(lada==8 || lada==9 || lada==10)
    {
        ladaErtek="Nyersanyag"
        Ertek=Szint*2
        Stat=0
        kep="erc.png"
        Ercek+=1
        OsszErtek+=Ertek
    }
    
   
    document.querySelector("#kiadas").innerHTML+=
`
 <div class="col-12 col-md-6 col-lg-3">
    <div class="card" >
    <img class="card-img-top" src=${kep} id="kepek">
    <div class="card-body">
        <h4 class="card-title">${ladaErtek}</h4>
        <p class="card-text">Statja: ${Stat} <br> Értéke: ${Ertek} arany</p>
        </div>
    </div>
</div>
`
Ertek=0

}

Statisztika()

}
function Statisztika()
{
let Ossz=Kardok+Pancelok+Ercek+Mimickek
let ErtekAVG=Math.round( OsszErtek/Ossz)
    document.querySelector("#Kardok").innerHTML=`Kardok száma: ${Kardok}`
    document.querySelector("#Pancelok").innerHTML=`Pacelok száma: ${Pancelok}`
    document.querySelector("#Ercek").innerHTML=`Ercek száma: ${Ercek}`
    document.querySelector("#Mimicek").innerHTML=`Mimicek száma: ${Mimickek}`
    document.querySelector("#OsszErtek").innerHTML=`OsszErtek száma: ${OsszErtek}`
    document.querySelector("#Atlag").innerHTML=`Atlag száma: ${ErtekAVG}`
}
