window.addEventListener('scroll', function(){
	let t = $('body, html').scrollTop();
	// 这是页头的全部部分
	var header = document.getElementById("header");
	// 
	var header_logo = document.getElementById('logo1');
	if(t>0){
		header.style.width='100%';
		header.style.position='fixed';
		// console.log(header_logo.style.left);
		// header_logo.style.left = 20-t+'px';

	}else{
		header.style.position='relative';
	}
})