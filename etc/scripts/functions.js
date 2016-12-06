
$( document ).ajaxStart(function() {
	//this function fire when ajax request start
});

$( document ).ajaxStop(function() {
	
	//this function fire when ajax request complete
});

//This variable is for use in circles
var Counter=0;
//this variable store value that return from events from server
var ReturnValue;


//this function use for show message in modal
function SysShowModal(data , jump_page){
	xmlDoc = $.parseXML( data ),
	$xml = $( xmlDoc ),
	$header = $xml.find( "header" );
	$content = $xml.find( "content" );
	$btnback = $xml.find( "btn-back" );
	$btnok = $xml.find( "btn-ok" );
	$type = $xml.find( "type" );
	BootstrapDialog.show({
		type: $type.text(),
		title: $header.text(),
		message: $content.text(),
		onshow: function(de){
				de.setClosable(false);
		},
		buttons: [{
				label: $btnok.text(),	       
				action: function(dialogItself){
					
					dialogItself.close(); 
					if(jump_page == 'R'){
						window.location.reload(true);
					}
					else if(jump_page == ''){
						//nothing to do
					}
					else if(jump_page != '0'){
						//chaange special chars to original
						  jump_page = decodeURIComponent(jump_page);
						//jump to page
						window.location.assign(jump_page);
					}
				}		       
		}]
	});  
}
