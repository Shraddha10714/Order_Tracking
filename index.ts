import * as readline from 'readline';

interface Ordsertracking{

    productName: string;
    quantity: number;
    price:number;
    orderId: string;
    track(): string;
}
class Order implements Ordsertracking{
    productName: string;
    quantity: number;
    price: number;
    orderId: string;

    constructor(productName:string, quantity: number, price: number, orderId: string){
        this.productName=productName;
        this.quantity=quantity;
        this.price=price;
        this.orderId=orderId;
    }

    track(): string{
        return `Order Id: ${this.orderId}\n ProductName: ${this.productName}\n Quantity: ${this.quantity}\n Price: ${this.price}`;

    }
}

class OrderTracking{
    private orders: Order[] =[];
    trackOrder(orderId:string){
        let found: Order | undefined;
        
        for(const order of this.orders){
            if(order.orderId===orderId){
                found=order;
                break;
            }
        }
        
        
        if(found){
            console.log(found.track());
            
        }
        else{
            console.log('Order not found.');
            
        }
    }


}

const tracker1=new OrderTracking();

const particularOrder = new Order('product A', 2, 100, 'ORDER-10');

tracker1['orders'].push(particularOrder);

//userInput
//provides methods to read input from the user which takes an object.
//
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//question method=> to prompt the user for input
rl.question('Enter orderId: ', userInput=>{
    tracker1.trackOrder(userInput);
    rl.close();
})

