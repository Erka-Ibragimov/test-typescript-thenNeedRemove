interface IInsurance {
  id: number;
  status: string;
  setVehicle: (vehicle: any) => any;
  sumbit: () => Promise<boolean>;
}
class TFInsurance implements IInsurance {
  constructor() {}
  id: number;
  status: string;
  private vehicle: any;
  setVehicle(vehicle: any) {
    this.vehicle = vehicle;
  }
  async sumbit(): Promise<boolean> {
    const res = await fetch("", { method: "POST", body: JSON.stringify({ vehicle: this.vehicle }) });
    const data = await res.json();
    return data.isSuccess;
  }
}

class ABInsurance implements IInsurance {
  constructor() {}
  id: number;
  status: string;
  private vehicle: any;
  setVehicle(vehicle: any) {
    this.vehicle = vehicle;
  }
  async sumbit(): Promise<boolean> {
    const res = await fetch("ab", { method: "POST", body: JSON.stringify({ vehicle: this.vehicle }) });
    const data = await res.json();
    return data.yes;
  }
}

abstract class InsuranceFactory {
  db: any;
  abstract createInsurance(): IInsurance;
  saveHistore(insurance: IInsurance) {
    this.db.save(insurance.id, insurance.status);
  }
}

class TFInsuranceFactory extends InsuranceFactory {
  createInsurance(): TFInsurance {
    return new TFInsurance();
  }
}

class ABInsuranceFactory extends InsuranceFactory {
  createInsurance(): ABInsurance {
    return new ABInsurance();
  }
}

const tfInsuranceFactory = new TFInsuranceFactory();
const ins = tfInsuranceFactory.createInsurance();
tfInsuranceFactory.saveHistore(ins);
///////////////////////////////////////////////////////
const INSURANCE_TYPE = {
  tf: TFInsurance,
  ab: ABInsurance,
};
type IT = typeof INSURANCE_TYPE;
class InsuranceFactoryAlt {
  db: any;
  createInsurance<T extends keyof IT>(type: T): IT[T] {
    return INSURANCE_TYPE[type];
  }
  saveHistore(insurance: IInsurance) {
    this.db.save(insurance.id, insurance.status);
  }
}
const insuranceFactoryAlt = new InsuranceFactoryAlt();
const ins2 = new (insuranceFactoryAlt.createInsurance("tf"))();
insuranceFactoryAlt.saveHistore(ins2);
