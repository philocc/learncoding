var requestOptions = {
  method: 'GET',
	host: uri.host,
	port: uri.port,
	path: uri.path,
	rejectUnauthorized: false,
	headers: {
		"Authorization": "Basic " + (new Buffer(user+":"+pass, 'utf8').toString("base64")),
		"User-Agent": "MCLogGenerator/0.0.1 ("+os.type()+" "+os.platform()+" "+os.arch()+") NodeJS/0.8.8",
		"Accept": "*/*"
	}
};
https.get(requestOptions, function(res){});
