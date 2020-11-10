//Recipient： 接受者
//Antibody: 抗体

class Recipient {
  constructor() {
    this.isContainAntibodies = false;
  }

  //composition：构成，成分
  //Virus Proteins： 病毒蛋白

  acceptInjection(vaccine) {
    if (vaccine.composition.contains("Virus Proteins")) {
      this.isContainAntibodies = true;
    }
  }

  hasAntibodies() {
    return this.isContainAntibodies;
  }
}

export default Recipient;
