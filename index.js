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



