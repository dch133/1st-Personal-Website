
function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1500);
  
  $('.projects').hide();
  
  $('.projects-button').on('click', 
  function() {
		$(this).next().slideToggle(400);
    $(this).toggleClass('active'); 
    $(this).text('Content Viewed');
    
	});
}

$(document).ready(main);