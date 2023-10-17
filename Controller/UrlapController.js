import UrlapModel from "../Model/UrlapModel.js";
import UrlapView from "../View/UrlapView.js"; 

class UrlapController{
    constructor(){
        const URLAPMODEL = new UrlapModel();
         new UrlapView($(".urlap"),URLAPMODEL.leiro);
         $(window).on("valid", function(event){
            console.log(event.detail);
        })
        /*console.log(URLAPMODEL.leiro.nev.tipus)
        console.log(URLAPMODEL.leiro.nev.placeholder)
        console.log(URLAPMODEL.leiro.szulEv.regex.min)
        console.log(URLAPMODEL.leiro.szulEv.megjelenes)*/
    }
}
export default UrlapController