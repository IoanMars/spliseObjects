const body = document.querySelector('body');
const div = document.createElement('div');
const users = [
    {
        name: 'Ilona',
        age: 26
    },
    {
        name: 'Robert',
        age: 23
    },
    {
        name: 'Odin',
        age: 22
    },
    {
        name: 'Martin',
        age: 33
    }
];

body.appendChild(div);

users.forEach(({name, age}, index) =>{
    const span = document.createElement('span');

    span.innerText = ` Name ${name}, Age ${age}.`;

    span.onclick = () => {
        users.splice(users[index], 1);
        span.remove();
    }

    div.appendChild(span);
});
