const _ = require("lodash");
const request = require("request-promise");
const URL = require("url");

async function crawlSite(website) {
  if (!website) {
    throw Error("Must provide website - e.g. node crawler.js [website]");
  }
  let result = [website];
  let url = URL.parse(website);
  request(website).then(html => {
    // console.log(html);
    let anchorTags = html.match(/href.*?</gi);
    console.log("> Anchors: ", anchorTags);
    let nextLink = _.find(anchorTags, tag => {
      // return /Next </.test(tag);
      // return /&rarr;/.test(tag);
      // return /&gt;&gt;/.test(tag);
      return /next/.test(tag);
    })
      .match(/(?:"[^"]*"|^[^"]*$)/)[0]
      .replace(/"/g, "");

    // console.log('> New link: ', nextLink, url.hostname + nextLink);
    // let newUrl = 'https://' + url.hostname + nextLink;
    let newUrl =
      website
        .split("/")
        .reverse()
        .slice(1)
        .reverse()
        .join("/") +
      "/" +
      nextLink;
    console.log('"' + newUrl + '",');
    crawlSite(newUrl);
    return html;
  });
}

crawlSite(process.argv[2]);
