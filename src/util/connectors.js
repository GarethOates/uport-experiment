import { Connect, SimpleSigner } from 'uport-connect'

export let uport = new Connect('UPort Test App', {
  network: "rinkeby"
})

// const abi = [{"constant": false,"inputs": [{"name": "status","type": "string"}],"name": "updateStatus","outputs": [],"type": "function"}]
// const contractAddress = '0x71845bbfe5ddfdb919e780febfff5eda62a30fdc'
// const statusContract = uport.contract(abi).at(contractAddress)

// statusContract.updateStatus('hello', 'updateStatusReq')
// uport.onResponse('updateStatusReq').then(payload => {
//   const txId = payload.res
// })

export const web3 = uport.getWeb3()

window.uport = uport;
window.web3 = web3;
