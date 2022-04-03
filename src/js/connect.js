// import Web3 from "web3"
// import abi from "../../secret/abi/abi.json"

// const web3 = new Web3(Web3.givenProvider);
let web3 = new Web3(window.ethereum)


const connectx = () => new Promise ((res, rej) => {
    if(window.ethereum !== undefined) {
        web3.eth.getAccounts((e,accounts) => {
            if(accounts.length > 0){
                res()
            } else {
                window.ethereum.request({method: "eth_requestAccounts"}).then(() => {
                    res()
                }).catch(e=> {
                    rej(e)
                })
            }
        })
    } else {
        rej("Install MetaMask")
    }
    // let web3 = new Web3(window.ethereum)
    // let web3 = new Web3(Web3.givenProvider)
    // let contract = new web3.eth.Contract(abi, "0xcC32dB54a697fEc47050a4A96d35A78Ba09f4dfD")
}) 

export default connectx