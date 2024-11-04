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

interface Manager2 { // we named it Manager2 because manager was defined in interface2.ts and it expects all the property
    // which were there in manager interface in interface2.ts file
    name: string;
    department: string;
};

type TechLead = Employee & Manager2;

const techlead: TechLead = {
    name: "Dhruv",
    startDate: new Date("2024-01-01"),
    department: "Devops",
    organisation: "xebia"
}
console.log(techlead);
const manager_lead: Manager2 ={
    name: "Agastya",
    department: "Administration"
}

console.log(manager_lead);
