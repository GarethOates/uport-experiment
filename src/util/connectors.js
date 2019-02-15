import { Connect, SimpleSigner } from 'uport-connect'

export let uport = new Connect('UPort Test App', {
  network: "rinkeby"
})

export const web3 = uport.getWeb3()

window.uport = uport;
window.web3 = web3;