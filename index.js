// alert("Hello");
 
// 1st step - Movement animation to happen
 
// This line selects one or more HTML elements with the class name "card" using jQuery. The $('.card') syntax is a jQuery selector, and it retrieves all elements with the class "card" from the HTML document
const card = $('.card');
const container = $('.container');
 


 
// 2nd step - Moving animation event
 

 
container.on('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20; //rotating the element into x axis
    let yAxis = (window.innerWidth / 2 - e.pageY) / 20; //rotating the element into y axis
    card.css('transform', `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`);
});
 
// 4th step - Adding animation in
container.mouseenter(function(e) {
    card.css('transform', 'none');
 
    // 
 // use this $ sign of jquery and you dont need to call  you want to animetion
  
 
    $('.photo img').css('transform', 'translateZ(50px)');
    $('.title').css('transform', 'translateZ(50px)');
    $('.social').css('transform', 'translateZ(50px)');
    $('.info h4').css('transform', 'translateZ(50px)');
    $('.profile').css('transform', 'translateZ(50px)');
  });
 
// 3rd step - Removing animation in
 

 
container.on('mouseleave', e => {
    card.css('transform', "all 0.5s ease");
    card.css('transform', `rotateY(0deg) rotateX(0deg)`);
});
//this is my own explanation for this activity
// this are the steps to modify the animation of a js
// 1- create an object from your class or id
// 2- add mouse move event on it
// 3- write down the code that will change the style attribute of the elements inside the object
//     when the user moves over the object
// 4- add mouse enter event for adding animation effect to the elements inside the object
//      when the user enters the object
// 5- add mouse leave event for removing animation effect from the elements inside the object
//       when the user leaves the object</s>
// to be specific , we're using jQuery here because:
// much more reliable to create and be more  sure about what is happening with DOM manipulation
