// import connectx from './connect';
import abi from "../../secret/abi/abi.json"


    let web3 = new Web3(window.ethereum)
    // let web3 = new Web3(Web3.givenProvider)

    let contract = new web3.eth.Contract(abi, "0xcC32dB54a697fEc47050a4A96d35A78Ba09f4dfD")

    const sendEth = (totalAmount, totalArtists) => {
        let divAmount = totalAmount/totalArtists;
        web3.eth.getAccounts().then((accounts) => {
        	contract.methods.sendToMany(["0x917a68cC6F5C0CcEC69C9C0b3Bd9A4A88573b38C","0x8Df125c833645119A6e4383c1805945eF7754Ef4"], [divAmount, divAmount]).send({from: accounts[0], value: totalAmount}).then((data)=> {
                console.log(data)
                location.href = "http://127.0.0.1:5500/src/Final_Build/index.html"
            })

    })
    }
    
    var btn1 = document.getElementById("one");
    var btn2 = document.getElementById("two");
    var btn3 = document.getElementById("three");

    btn1.addEventListener("click", function() {
        sendEth(1000000000000000, 2)
    }, false);

    btn2.addEventListener("click", function() {
        sendEth(2000000000000000, 2)
    }, false);

    btn3.addEventListener("click", function() {
        sendEth(5000000000000000, 2)
    }, false);