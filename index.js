function about() {
    // hide everything else, show about me
    $('.menu_content').hide();
    $('#about_content').show();

    // un-underline all other tabs, underline about
    $('.menu_title').css('text-decoration','none');
    $('#about').css('text-decoration','underline');
}

function speaking(){
    $('.menu_content').hide();
    $('#speaking_content').show();

    $('.menu_title').css('text-decoration','none');
    $('#speaking').css('text-decoration','underline');
}

function projects(){
    $('.menu_content').hide();
    $('#projects_content').show();

    $('.menu_title').css('text-decoration','none');
    $('#projects').css('text-decoration','underline');
}

function cv(){
    $('.menu_title').css('text-decoration','none');
	$('#cv').css('text-decoration','underline');
}

function connect(){
    $('.menu_content').hide();
    $('#connect_content').show();

    $('.menu_title').css('text-decoration','none');
    $('#connect').css('text-decoration','underline');
}