# dEmergency:

A decentralized SOS triggering service for medical emergencies,which will ensure fair allocation of the nearest hospital having availability ,to the person in need , in minimum time.

## Idea Description:
The main idea of the project is to provide treatment in.....


## How will it's gonna work?
Our dEmergency system can be divided into following ends:-

#### Admin End :
Admin End will consist of an admin who is the owner if the smart contract and has the authority to add good and licensed hospitals to the contract.
During the process of adding a hospital , fields like the address(ethereum address) of ,longitude,latitide,contact no,Hospital Availability,Hospital Capacity and add the hospital data to the contract.


#### User/Client End :
This consists a simple UI with a single button,which a person will press in the case of emergency.As soon as user clicks the button,his current location coordiantes will be taken and his name and contact details are taken ,and the nearest hospital which has availability will be alloted to him.This will trigger two events ,one will carry information if the alloted hospital to the user,and other will inform the hospital about the patient.


#### Backend or Ethereum End :

The contract end will contain structs of Patient and Hospital,and their different mappings to access them as per use.


#### Dependencies and Tools:
Ethereum-Blockchain,Node JS,React JS,Metamask,Truffle Suite including express box,Ganache,Rinkeby Test-network,Python for implementation
of Voronoi Algorithm to find the closest hospital nearby the user.


#### Future Implementations:
