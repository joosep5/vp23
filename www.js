const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");


const pageHead = '<!DOCTYPE html><html><head><metacharset="utf-8"><title>Joosep Madar, veebiprogrammeerimine 2023</title><script> src="first.js" defer></script>console.log("see töötab");</script></head><body>'

const pageBanner ='<img src="../~rinde/media/pics/banner/vp_banner_2023.png" alt="veebiprogrammeerimise kursuse bänner"><h1>Joosep Madar</h1><p>see veebileht on valminud <a href="https://www.tlu.ee" target="_blank">TLU</a> digitehnoloogia instituudi eriala õpetöö raames</p><hr>'

const pageBody ='<hr></body></html>'

const pageFoot ='???mida siia panna???'


http.createServer(function(req, res){
	let currentURL = url.parse(req.url, true);
	//console.log(currentURL);
	if (currentURL.pathname === "/"){
		res.writeHead(200, {"Content-type": "text/html"});
		res.write(pageHead);
		res.write(pageBanner);
		res.write(pageBody);
		res.write('');
		res.write(pageFoot);
		//console.log("keegi vaatab!");
		return res.end();
	}
	else if currentURL.pathname === "/addname")
	else if (currentURL.pathname === "/banner.png"){
		console.log("tahame pilti!");
		let bannerPath = path.join(__dirname, "public", "banner");
		fs.readFile(bannerPath + currentURL.pathname, (err, datra)=>{
			if (err) {
				throw err;
			}
			else {
				res.writeHead(200, {"Content-type": "image/html"});
				res.end(data);
			}
		});
	}
	//valmis, saada ära
	
	
}).listen(5120);

//joosep 5120
//rinde 5100

