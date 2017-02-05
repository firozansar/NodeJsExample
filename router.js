//Our server will need to answer differently to requests,
//depending on which URL the request was asking for, thus
//we need some kind of router in order to map requests to
//request handlers.

function route(handle, pathname, response, request) {
	console.log("About to route a request for " + pathname);
	if (typeof handle[pathname] === 'function') {
		handle[pathname](response, request);
	} else {
		console.log("No request handler found for " + pathname);
		response.writeHead(404, {"Content-Type": "text/html"});
		response.write("404 Not found");
		response.end();
	}
}

exports.route = route;