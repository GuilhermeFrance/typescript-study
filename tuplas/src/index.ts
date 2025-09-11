// Tuplas 

type NameList = string[];

const list: NameList = [];
list.push("Guilherme")

type CalendarDate = [day: number, month: number, year: number];

const date: CalendarDate = [9, 3, 2003]

function createDate(date: CalendarDate){
    const [day, month, year] = date;
}

createDate(date)