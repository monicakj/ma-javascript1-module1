const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// question 1

// answer to question 1
const cat = {
    complain: function() {
        console.log("Meow!");
    }
}

cat.complain();


// question 2

// answer to question 2
const heading = document.querySelector("h3"); 

heading.innerHTML = "Updated heading";

console.log(heading);


// question 3

// answer to question 3
heading.style.fontSize = "2em";

console.log(heading);


// question 4

// answer to question 4
heading.className = "subheading";

console.log(heading.className);


// question 5

// answer to question 5
const paragraphs = document.querySelectorAll("p");

console.log(paragraphs);

for(let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i]);

    paragraphs[i].style.color = "red";
}


// question 6

// answer to question 6
const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.background = "yellow";


// question 7

// answer to question 7
function catsList (list) {
    for(let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

catsList(cats);


// question 8

// answer to question 8
function createCats (cats) {
    let html = "";
    
    for(let i = 0; i < cats.length; i++) {
        console.log(cats[i]);

    let displayAge = "Age unknown";
    
    if (cats[i].age) {
        displayAge = cats[i].age;
    }

    html += `<div class="cats">
                <h5>${cats[i].name}</h5>
                <p>Age: ${displayAge}</p>
            </div>`;

    console.log(html);
}

return html;

}

createCats (cats);

const newHTML = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHTML; 
