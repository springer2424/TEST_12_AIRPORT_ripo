class RegularTicket {
  ownerName = null;
  ticketNumber = Math.floor(Math.random() * 10000000);
  constructor(price) {
    this.price = price;
  }
}

class VIPTicket extends RegularTicket {
  benefitsList = ["Free alcohol", "Free food", "Hot towels"];
}

class Flight {
  Ticketslist = [];
  constructor(
    Fname,
    Airline,
    Fnumber,
    Maximumpassengers,
    Regularprice,
    VIPprice
  ) {
    this.Fname = Fname;
    this.Airline = Airline;
    this.Fnumber = Fnumber;
    this.Maximumpassengers = Maximumpassengers;
    this.Regularprice = Regularprice;
    this.VIPprice = VIPprice;
  }
  Ticketslist = [];
}

class StudentPassenger {
  constructor(name, IDnumber, AmountOfMoney, SchoolName) {
    this.name = name;
    this.IDnumber = IDnumber;
    this.AmountOfMoney = AmountOfMoney;
    this.SchoolName = SchoolName;
  }

  bayRegularT(flait) {
    const rgularT = flait.Ticketslist.find(
      (tikit) => tikit instanceof RegularTicket && tikit.ownerName === null
    );
    console.log(rgularT);

    if (!rgularT) {
      throw new Error("ther is not eveilebal T for this prais");
    }
    rgularT.price *= 0.9;
    if (!this.checkBalans(rgularT.price)) {
      throw new Error("1not enof moni");
    }
    rgularT.ownerName = this.name;
    console.log("your but a reguler tikit");
  }
  bayVipT(flait) {
    const vipT = flait.Ticketslist.find(
      (tikit) => tikit instanceof VIPTicket && tikit.ownerName === null
    );
    if (!vipT) {
      throw new Error("ther is not eveilebal T for this prais");
    }
    if (!this.checkBalans(vipT.price)) {
      throw new Error("not enof moni");
    }
    vipT.ownerName = this.name;
    console.log("your but a vip tikit");
  }
  checkBalans(prais) {
    if (this.AmountOfMoney >= prais) {
      this.AmountOfMoney -= prais;
      return true;
    }
    return false;
  }
}
class RegularPassenger extends StudentPassenger {
  constructor(
    name,
    IDnumber,
    AmountOfMoney,
    Workplace,
    KnowsAnAirportEmployee
  ) {
    super(name, IDnumber, AmountOfMoney);
    this.Workplace = Workplace;
    this.KnowsAnAirportEmployee = KnowsAnAirportEmployee;
  }
  bayRegularT(flait) {
    const rgularT = flait.Ticketslist.find(
      (tikit) => tikit instanceof RegularTicket && tikit.ownerName === null
    );

    if (!rgularT) {
      throw new Error("ther is not eveilebal T for this prais");
    }
    if (this.manigPris()) {
      rgularT.price = rgularT.price * 0.8;
    }

    if (!this.checkBalans(rgularT.price)) {
      throw new Error("not enof moni");
    }
    rgularT.ownerName = this.name;
    console.log("your but a reguler tikit");
  }
  bayVipT(flait) {
    const vipT = flait.Ticketslist.find(
      (tikit) => tikit instanceof VIPTicket && tikit.ownerName === null
    );
    if (!vipT) {
      throw new Error("ther is not eveilebal T for this prais");
    }
    if (this.manigPris()) {
      vipT.pris = vipT.price * 0.85;
    }

    if (!this.checkBalans(vipT.price)) {
      throw new Error("not enof moni");
    }
    vipT.ownerName = this.name;
    console.log("your but a vip tikit");
  }
  checkBalans(prais) {
    if (this.AmountOfMoney >= prais) {
      this.AmountOfMoney -= prais;
      return true;
    }
    return false;
  }
  manigPris() {
    if (this.KnowsAnAirportEmployee) {
      return true;
    }
    return false;
  }
}

class Airport {
  constructor() {
    this.flight1 = new Flight("Telaviv", "elal", "234", 100, 100, 200);
    this.flight2 = new Flight("London", "elal", "235", 100, 100, 200);
    this.flight3 = new Flight("Manchester", "elal", "236", 100, 100, 200);
    this.listFlaits = [this.flight1, this.flight2, this.flight3];
    this.get1090(this.listFlaits);
  }
  get1090(listFlaits) {
    listFlaits.forEach((flight) => {
      for (let i = 0; i < flight.Maximumpassengers * 0.9; i++) {
        flight.Ticketslist.push(new RegularTicket(flight.Regularprice));
      }
    });

    listFlaits.forEach((flight) => {
      for (let i = 0; i < flight.Maximumpassengers * 0.1; i++) {
        flight.Ticketslist.push(new VIPTicket(flight.VIPprice));
      }
    });
  }
}

const airport = new Airport();

const student = new StudentPassenger("moshe", 45674, 300, "jbh");
student.bayVipT(airport.flight1);
const rgularP = new RegularPassenger("yehouda", 54675490, 1000, "googol", true);
rgularP.bayVipT(airport.flight1);
