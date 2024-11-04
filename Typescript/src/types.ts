// Unions: if we want to print id of user which can be number or string
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202

//intersection: if we want to create a type that has property of all types/interfaces
type Employee = {
    name: string;
    startDate: Date;
    organisation: string;
};

interface Manager {
    name: string;
    department: string;
};

type TechLead = Employee & Manager;

const tech_lead: TechLead = {
    name: "Dhruv",
    startDate: new Date("2024-01-01"),
    department: "Devops",
    organisation: "xebia"
}
console.log(tech_lead);
