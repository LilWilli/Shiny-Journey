const  {URL}  = require('url');
const url = new URL('https://twitter.com/abulhasan4?ref=twitter&ref_src=twsrc%5Etfw');

// console.log(url.searchParams.get('ref')); // twitter
// console.log(url.href) // https://twitter.com/abulhasan4?ref=twitter&ref_src=twsrc%5Etfw
// console.log(url.host) // twitter.com
// console.log(url.origin) // https://twitter.com
// console.log(url.pathname)  // /abulhasan4
// console.log(url.search) // ?ref=twitter&ref_src=twsrc%5Etfw
// console.log(url.searchParams) // URLSearchParams { 'ref' => 'twitter', 'ref_src' => 'twsrc%5Etfw' }
