import {  getIdsClients, getMapClients } from "../models/mysqlModel.js";
import { calculateDistance } from "./distanceService.js";
import { generatePermutations } from './permutateService.js'

export async function main() {
    let clients = await getMapClients();
    let idIndex = await getIdsClients();
    idIndex = idIndex.map((obj => obj.id))
    //company position 0,0
    idIndex.push(0)

    let permute = generatePermutations(idIndex, 0, []);

    //remove places that not start on the origin 0,0
    let indexOptions = [...permute].filter(opt => opt[0] == 0)

    let listaOfClientsList = [];
    let distancias = [];
    for (let i = 0; i < indexOptions.length; i++) {
        let arrayIndex = indexOptions[i];

        let newClientList = [];
        //new order of clients to be calculated
        for (let el of arrayIndex) {
            newClientList.push(clients.filter(e => e.id == el));
        }
        //save that list
        newClientList[0] = [{ id: 0, latitude: 0, longitud: 0 }]
        listaOfClientsList.push(newClientList);
        //calculate distance
        distancias.push(calculateDistance(newClientList));
    }
    let minDistanceresult = Math.min(...distancias);
    minDistanceresult = (distancias.length > 0) ? minDistanceresult : 0.0;

    let whichDistanceOrder = distancias.findIndex((value) => value === minDistanceresult);
    whichDistanceOrder = (whichDistanceOrder !== -1) ? whichDistanceOrder : -1;

    const result= {arrayPositions:indexOptions[whichDistanceOrder],minDistanceresult} 
    console.log(result)
    return result;

}
// const letters = ['A', 'B', 'C', 'D'];
// const permutations = [];
//generatePermutations(letters, 0, permutations);
