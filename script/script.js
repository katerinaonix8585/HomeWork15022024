// Домашняя работа

const employees = [
    { name: 'Alice', salary: 5000 },
    { name: 'Bob', salary: 6000 },
    { name: 'Charlie', salary: 4500 }
  ];


// 1. Удвоение зарплаты

const result_1 = employees.map (eployee => eployee.salary * 2);
console.log(result_1);

// 2. Фильтрация сотрудников

const result_2 = employees.filter(({salary}) => salary > 5500);
console.log(result_2);

// 3. Общая зарплата

const result_3 = employees.reduce((acc, item) => acc + item.salary, 0);
console.log(result_3);

// 4. Имена в верхнем регистре

const result_4 = employees.map (employee => employee.name.toUpperCase());
console.log(result_4);
