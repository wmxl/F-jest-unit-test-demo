import Recipient from "./recipient";
import Covid19Vaccine from "./covid19Vaccine";

//VaccineTest： 疫苗检测
//Vaccine： 疫苗
//Recipient： 接受者(被注射疫苗的人)
//Antibody: 抗体

export default class VaccineTest {
  constructor() {
    this.recipient = new Recipient();
    this.vaccine = new Covid19Vaccine();
  }

  inject() {
    this.recipient.acceptInjection(this.vaccine);
  }

  test() {
    if (this.recipient.hasAntibodies()) {
      return "Vaccine Test Success";
    }
    return "Vaccine Test Failed";
  }
}
