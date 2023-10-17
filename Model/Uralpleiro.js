export const Urlapleiro={
    nev:{
        megjelenes:"Név",
        tipus:"text",
        value:"",
        placeholder:"Név",
        regex:"[A-Z][a-z]{2,15}",
        invalid:"Név nagybetű kezdődik, legalább 3 karakter!!",


    },
    szulEv:{
        megjelenes:"Születési év",
        tipus:"number",
        value:"2000",
        regex:{
            min:1000,
            max:2023
        },
        invalid:"1000 és 2023 között kell az értéket adni!!"
    }
}
