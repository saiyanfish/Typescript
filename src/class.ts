abstract class Deparment {
  // name: string;
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(
    public name: string,
    protected readonly id: number,
  ) {
    // console.log(Deparment.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Deparment): void;
  // {
  // console.log('ff:' + this.name + ',' + this.id);
  // }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployee() {
    console.log(this.employees);
  }
}

// const accounting = new Deparment('gg', 53);

// accounting.describe();
// accounting.addEmployee('jason');
// accounting.printEmployee();
// const accountingCopy = {
//   employees: ['22'],
//   name: 'dddd',
//   describe: accounting.describe,
//   addEmployee:accounting.addEmployee
// };

class ItDepartment extends Deparment {
  describe(this: Deparment): void {
    console.log('barbar');
  }
  public admins: string[];

  constructor(id: number, admins: string[]) {
    super('it', id);
    this.admins = admins;
  }
}

class AccountingDepartmet extends Deparment {
  private lastReport: string;
  private static instance: AccountingDepartmet;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('no report found');
  }

  set mostRecentReport(val: string) {
    if (!val) return;
    this.addReport(val);
    this.lastReport = this.reports[0];
  }

  private constructor(
    id: number,
    private reports: string[],
  ) {
    super('IT', id);
    this.lastReport = reports[0];
  }
  static getInstance() {
    if (AccountingDepartmet.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartmet(1, []);
    return this.instance;
  }
  describe() {
    console.log(this.id);
  }
  addReport(report: string) {
    this.reports.push(report);
  }
  getReports(): string[] {
    return this.reports;
  }
}

const Ac = AccountingDepartmet.getInstance();
Ac.addReport('124');
Ac.mostRecentReport = '2334';
console.log(Ac.mostRecentReport);
Ac.describe();

const Max = Deparment.createEmployee('max');
console.log(Max, Deparment.fiscalYear);

// accountingCopy.describe();
export default Deparment;