'use strict';

$(document).ready(function(){
	$('select').material_select();

	$('a.button-collapse').sideNav({
            menuWidth: 300, 
            edge: 'left',
            closeOnClick: true
        }
    );

    $('.materialboxed').materialbox();
});