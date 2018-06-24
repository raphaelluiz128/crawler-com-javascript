var Crawler = {
	request : null,
	cheerio : null,
	fs      : null,
	init : function(){
		Crawler.request = require('request');
		Crawler.cheerio = require('cheerio');
		Crawler.fs      = require('fs');
		Crawler.getMovies();
	},

	getMovies: function(){
		Crawler.request('http://sace.cprm.gov.br/muriae/', function(err, res, body){
			if(err)
				console.log('Error: ' + err);
			var $ = Crawler.cheerio.load(body);
		//	$('#col2 ul').each(function(){
			//	var title  = $(this).find('li a').text().trim();
					$('#infoMapa').each(function(){
				var title  = $(this).find('font table tbody tr td a').text().trim();
				console.log(title);
				Crawler.fs.appendFile('cprm.txt', title + '\n');
			});
		});
	}
};
Crawler.init();