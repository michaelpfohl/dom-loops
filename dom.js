"use strict";

const dinosaurs = [
    {
      dinoType: 't-rex',
      name: 'Wrex',
    },
    {
      dinoType: 'stegosaurus',
      name: 'Steve',
    },
    {
      dinoType: 'velociraptor',
      name: 'Ted',
    }
  ];

  const assignments = [
    {
      title: 'product cards',
      dueDate: '03/05/2019',
      topic: 'HTML/CSS',
      notes: 'Use flexbox',
      assignmentUrl: 'http://www.google.com',
    },
    {
      title: 'product cards2',
      dueDate: '03/05/2019',
      topic: 'HTML/CSS',
      notes: 'Use flexbox',
      assignmentUrl: 'http://www.google.com',
    },
    {
      title: 'product cards3',
      dueDate: '03/05/2019',
      topic: 'HTML/CSS',
      notes: 'Use flexbox',
      assignmentUrl: 'http://www.google.com',
    },
    {
      title: 'product cards4',
      dueDate: '03/05/2019',
      topic: 'HTML/CSS',
      notes: 'Use flexbox',
      assignmentUrl: 'http://www.google.com',
    },
    {
      title: 'product cards5',
      dueDate: '03/05/2019',
      topic: 'HTML/CSS',
      notes: 'Use flexbox',
      assignmentUrl: 'http://www.google.com',
    }
  ];



const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

 const buildDinosaurs = (arr) => {
    let domString = "";

    for (let i = 0; i < arr.length; i++){
        domString+=`<div class="dinosaur">`
        domString+=     `<h3 class="dinosaur-header">${arr[i].dinoType}</h3>`
        domString+=     `<p>${arr[i].name}</p>`
        domString+=`</div>`
    }
    printToDom("dino-barn", domString);
}

const buildAssignmentCards = (arr) => {
    let domString = ""
    for (let j = 0; j < arr.length; j++){
        domString += `<div class="assignment-card">`
        domString +=   `<div class="assignment-title">${assignments[j].title}</div>`;
        domString +=   `<strong>Due Date: ${assignments[j].dueDate}</strong>`
        domString +=   `<div>Get the assignment <a href=${assignments[j].assignmentUrl}>HERE</a></div>`
        domString +=   `<div>Topic: ${assignments[j].topic}</div>`
        domString +=   `<div>Notes: ${assignments[j].notes}</div>`
        domString += `</div>`
    }

    printToDom("assignments", domString);
}

const init = () => {
    buildDinosaurs(dinosaurs);
    buildAssignmentCards(assignments);
}

init();