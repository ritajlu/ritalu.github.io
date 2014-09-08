function aboutme() {
    // hide projects, show about me
    $('#projects_main').hide();
    $('#aboutme_main').show();

    // underline about me, un-underline projects
    $('#about').css('text-decoration','underline');
    $('#projects').css('text-decoration','none');
    $('#cv').css('text-decoration','none');
}


function projects(){
    $('#aboutme_main').hide();
    $('#projects_main').show();

    $('#projects').css('text-decoration','underline');
    $('#about').css('text-decoration','none');
    $('#cv').css('text-decoration','none');
}

function cv(){
	$('#cv').css('text-decoration','underline');
	$('#projects').css('text-decoration','none');
    $('#about').css('text-decoration','none');
}