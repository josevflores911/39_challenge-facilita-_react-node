export function calculateDistance(clients) {
    let result = 0;
    for (let i = 0; i < clients.length - 1; i++){
        
        let A= Math.pow(((clients[i][0]['latitude'])-(clients[i+1][0]['latitude'])),2 );
        let B = Math.pow(((clients[i][0]['longitud'])-(clients[i+1][0]['longitud'])),2 );
        let temp =Math.sqrt( A + B );
        result += temp;
        
    }
    return result;
}