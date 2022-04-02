// import Web3 from "web3"
import Web3 from "web3"
import abi from "../../secret/abi/abi.json"

// const web3 = new Web3(Web3.givenProvider);


    const connectx = new Promise ((res, rej) => {
    if(window.web3 != "undefined") {
        res('connect')
    }
    if(window.etheruem != "undefined") {
        window.ethereum.enable().then(() => {
            res(new Web3(window.ethereum))
        }).catch(e=> {
            rej(e)
        })
    }
    
    // let web3 = new Web3(window.ethereum)
    // let web3 = new Web3(Web3.givenProvider)
    console.log('this is a promise' )
    // let contract = new web3.eth.Contract(abi, "0xcC32dB54a697fEc47050a4A96d35A78Ba09f4dfD")
    rej("connect metamask")
})

//     const connecty = new Promise ((res, rej) => {
//     if(typeof window.ethereum == "undefined") {
//         rej("Install metamask")
//     }
//     window.ethereum.request({method: "eth_requestAccounts"})
//     // let web3 = new Web3(window.ethereum)
//     // let web3 = new Web3(Web3.givenProvider)
//     console.log('this is a promise' )
//     // let contract = new web3.eth.Contract(abi, "0xcC32dB54a697fEc47050a4A96d35A78Ba09f4dfD")
//     rej("connect metamask")
    
    
//     res('connect')
// })

export default connectx