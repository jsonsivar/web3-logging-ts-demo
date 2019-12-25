import { TerminalHttpProvider } from "@terminal-packages/sdk";
import Web3 from "web3";

const provider:any = new Web3.providers.HttpProvider('https://terminal.co/networks/ethereum_main/internal-master-key');

const providerNew: any = new TerminalHttpProvider({
    customHttpProvider: provider,
    apiKey: 'APIKEY',
    projectId: 'PROJECTID',
    source: 'Terminal',
  })

const web3:any = new Web3(providerNew);

// do web3 stuff