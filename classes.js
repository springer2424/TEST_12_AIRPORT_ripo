class RegularTicket{
    ownerName = null
    ticketNumber = Math.floor(Math.random() * 10000000)
    price = null
}

class VIPTicket extends RegularTicket{
    price = null
    benefitsList = ["Free alcohol","Free food","Hot towels"]  
}



class Flight{
    
    Ticketslist = []
    constructor(Fname,Airline,Fnumber,Maximumpassengers,Regularprice,VIPprice){
        this.Fname = Fname
        this.Airline = Airline
        this.Fnumber =  Fnumber
        this.Maximumpassengers = Maximumpassengers
        this.Regularprice = Regularprice
        this.VIPprice = VIPprice
    }
    Ticketslist = []
}


class StudentPassenger{
    constructor(Name,IDnumber,AmountOfMoney,SchoolName){
        this.Name = Name
        this.IDnumber = IDnumber
        this.AmountOfMoney = AmountOfMoney
        this.SchoolName = SchoolName
    }

}
class RegularPassenger extends StudentPassenger{
    constructor(Name,IDnumber,AmountOfMoney, Workplace,KnowsAnAirportEmployee){
        super(Name,IDnumber,AmountOfMoney)
        this.Workplace = Workplace
        this.KnowsAnAirportEmployee = KnowsAnAirportEmployee
    }
}

class Airport{
    
    constructor(){
        this.flight1 = new Flight("Telaviv","elal","234",100,100,200) 
        this.flight2 = new Flight("London","elal","235",100,100,200)
        this.flight3 = new Flight("Manchester","elal","236",100,100,200)
        this.listFlaits = [this.flight1,this.flight2,this.flight3]
        this.get1090(this.listFlaits)
    }
    get1090(listFlaits){
       
        listFlaits.forEach((flight) => {for(let i = 0; i < (flight.Maximumpassengers * 0.9) ;i++){
            flight.Ticketslist.push((new RegularTicket()))}}
        )}}
        
    

const c = new Airport()
console.log(c)
console.log(c.flight1.Ticketslist)
