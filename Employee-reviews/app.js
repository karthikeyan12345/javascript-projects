// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
    "https://c8.alamy.com/comp/MF3P30/portrait-of-smiling-web-designer-working-on-draft-at-desk-in-office-MF3P30.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
//Select the items

const img= document.getElementById("person-img");
const author= document.getElementById("author");
const job= document.getElementById("job");
const info= document.getElementById("info");

//select buttons

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Set the start of the item

let currItem=0;

//load Initial Item
//outputs after HTML file is loaded excluding images,css,etc..
window.addEventListener("DOMContentLoaded",function()
{
showPerson(currItem);
});

//  function to generate review.
function showPerson(person)
{
  const item=reviews[person];
img.src=item.img;
author.textContent=item.name;
job.textContent=item.job;
info.textContent=item.text;
}
// show random review
nextBtn.addEventListener("click",function()
{
  currItem++;
  if(currItem>=reviews.length)
  {
    currItem=0;
  }
  showPerson(currItem);
});

// show previous review
prevBtn.addEventListener("click",function()
{
  currItem--;
  if(currItem<0)
  {
    currItem=reviews.length-1;
  }
  showPerson(currItem);
});
//  show random review
randomBtn.addEventListener("click",function()
{
  const curr=currItem;
  while(curr==currItem)
  {
    currItem= Math.floor(Math.random()*reviews.length);
  }
  showPerson(currItem);
});
