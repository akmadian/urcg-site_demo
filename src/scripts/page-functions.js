function set_site_content(file) {
    $('#site-container').load(file), function(){
        console.log('load done')
    };
}