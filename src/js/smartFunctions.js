// import connectx from './connect';
import abi from "../../secret/abi/abi.json"


    let web3 = new Web3(window.ethereum)
    // let web3 = new Web3(Web3.givenProvider)

    let contract = new web3.eth.Contract(abi, "0xcC32dB54a697fEc47050a4A96d35A78Ba09f4dfD")
    
var btn = document.getElementById("one");
btn.addEventListener("click", function() {
    web3.eth.getAccounts().then((accounts) => {
        	contract.methods.sendToMany(["0x0b8e990E91A7cDcE53774F440a2084b616E2A468"], [20000000000]).send({from: accounts[0], value: 20000000000}).then((data)=> console.log(data))

    })
}, false);


