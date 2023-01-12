const htmlMinifier = require('html-minifier');
const nanoId = require('nanoid');
const { monthNames, dayNames, nth, isDateFuture } = require('./src/js/custom/utils');

module.exports = (eleventyConfig) => {

  eleventyConfig.addCollection("posts", (post) => {
    const result = post.getAll()[0].data.entries;

    let posts = result.filter(function(item) {
      return item.subtype == "posts" 
            && item.fields.content.fields.main.fields.publishDate.value;
    });


    posts.sort(function(a,b) {
        var dateA = new Date(a.fields.content.fields.main.fields.publishDate.value.datetime);
        var dateB = new Date(b.fields.content.fields.main.fields.publishDate.value.datetime);
        if (dateA && dateB) {
          return dateB - dateA;
        }
    })
   
    return posts;

  });

  eleventyConfig.addCollection("featuredPosts", (post) => {
    const result = post.getAll()[0].data.entries;

    let posts = result.filter(function(item) {
      return item.subtype == "posts" 
            && item.fields.content.fields?.main?.fields?.publishDate?.value
            && item.status == "published"
            && item.fields.content.fields?.main?.fields?.isFeatured?.value;
    });


    posts.sort(function(a,b) {
        var dateA = new Date(a.fields.content.fields.main.fields.publishDate.value.datetime);
        var dateB = new Date(b.fields.content.fields.main.fields.publishDate.value.datetime);
        if (dateA && dateB) {
          return dateB - dateA;
        }
    })
   
    return posts;

  });

  eleventyConfig.addCollection("events", (event) => {
    const result = event.getAll()[0].data.entries;

    // get events type
    let events = result.filter(function(item) {
      return item.subtype == "events" 
              && item.fields.content.fields.startDate.value
              && item.status == "published";
    });

    // sort events by startDate
    events.sort(function(a,b) {
        var dateA = new Date(a.fields.content.fields.startDate.value);
        var dateB = new Date(b.fields.content.fields.startDate.value);
        if (dateA && dateB) {
          return dateA - dateB;
        }
    })

    // filter events for future dates only
    return events.filter(function(event) {
      const today = new Date();
      expireDate = event.fields.content?.fields?.endDate?.value.length ? event.fields.content.fields.endDate.value : event.fields.content.fields.startDate.value;
      let showFromDate = new Date(event.fields.settings?.fields?.showDate?.value);

      if (event.fields.settings?.fields?.keepVisible?.value === true) {
        return event;
      } else if ((showFromDate.getTime() < today.getTime()) || isNaN(showFromDate.getTime()) || event.fields.settings?.fields?.showDate?.value == null) {
        expireDate = new Date(expireDate);
        // add 24 hours to event's start/end date
        theNextDay = new Date(expireDate.getTime() + 60 * 60 * 24 * 1000); 

        return isDateFuture(theNextDay);
      }
      
    });

  });

  eleventyConfig.addCollection("keydates", (keydate) => {
    const result = keydate.getAll()[0].data.entries;

    let keydates = result.filter(function(item) {
      return item.subtype == "keydates" 
              && item.status == "published";
    });

     // filter date set for unexpired dates only
     return keydates.filter(function(key) {
      const today = new Date();
      expireDate = new Date(key.fields.settings?.fields?.expireDate?.value);
      let showFromDate = new Date(key.fields.settings?.fields?.showDate?.value);
    
      if (isNaN(expireDate.getTime()) || key.fields.settings?.fields?.expireDate?.value == null) {
        return key;
      } else if ((showFromDate.getTime() < today.getTime()) || isNaN(showFromDate.getTime())) {
        return isDateFuture(expireDate);
      }
      
    });
   
  });

  eleventyConfig.addFilter("limit", function(array, limit) {
    if (array) {
      return array.slice(0, limit);
    }
   });

   eleventyConfig.addFilter("filterResults", function(array, type, match) {

    if (array && type == 'category') {
      const catList = array.filter((arr) => {
        let arrCategories = arr.fields?.content?.fields?.category?.value.split(',');
        if (arrCategories) {
          const matches = arrCategories.filter(cat => match.includes(cat.trim().toLowerCase()));
          if (matches.length > 0) {
            return true;
          }
        }
        
      });
      return catList;
    }

    if (array && type == 'category-date') {
      const catList = array.filter((arr) => {
        let arrCategories = arr.fields.category?.value.split(',');
        if (arrCategories) {
          const matches = arrCategories.filter(cat => match.includes(cat.trim().toLowerCase()));
          if (matches.length > 0) {
            return true;
          }
        }
        
      });
       // sort dates by expDate
       return catList.sort(function(a,b) {
        var dateA = new Date(a.fields.settings?.fields?.expireDate?.value);
        var dateB = new Date(b.fields.settings?.fields?.expireDate?.value);
        if (dateA && dateB) {
          return dateA - dateB;
        }
       })
    }

    if (array && type == 'category-post') {
      const catList = array.filter((arr) => {
        let arrCategories = arr.fields?.content?.fields?.main?.fields?.categories?.value.split(',');
        if (arrCategories) {
          const matches = arrCategories.filter(cat => match.includes(cat.trim().toLowerCase()));
          if (matches.length > 0) {
            return true;
          }
        }
        
      });
      return catList;
    }

    if (array && type == 'named') {
      const namedDates = array.filter((arr) => {
        let thedates = match.includes(arr.label.toLowerCase());
        return thedates;
      });

      // sort dates by expDate
      return namedDates.sort(function(a,b) {
        var dateA = new Date(a.fields.settings?.fields?.expireDate?.value);
        var dateB = new Date(b.fields.settings?.fields?.expireDate?.value);
        if (dateA && dateB) {
          return dateA - dateB;
        }
       })
    }

    if (array && type == 'post-labels') {
      return labeledPosts = array.filter((arr) => {
        let posts = match.includes(arr.label.toLowerCase());
        return posts;
      });
    }

    if (array && type == 'exclude') {
      return labeledPosts = array.filter((arr) => {
        let posts = !match.includes(arr.label.toLowerCase());
        return posts;
      });
    }

    if (array && type == 'url') {
      return contentByUrl = array.filter((arr) => {
        let thecontent = arr.fields.settings?.fields?.urlPath.value.includes(match);
        return thecontent;
      });
    }
  });

  eleventyConfig.addFilter('uniqueAlphaKey', (prefix = '', keyLength = 8) => {
    const customAlphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const nanoIdCustomAlphabet = nanoId.customAlphabet(customAlphabet, keyLength);
    return prefix + nanoIdCustomAlphabet();
  });

  eleventyConfig.addFilter('expiredDate', (item) => {
    if (item) {
      item = new Date(item);
      const today = new Date();
      item = new Date(item.getTime() + 60 * 60 * 24 * 1000); 

      if (item.getTime() <= today.getTime()) {
          return true;
      }
    }
  })

  eleventyConfig.addFilter('getAssetUrl', (asset) => {
      if (asset) {
          return `https://${process.env.IMGIX_DOMAIN}/${process.env.SITE_ID}/${asset.filename}`;
      }
  });

  eleventyConfig.addFilter('formatDate', (input, format) => {
    if (input) {
      const date = new Date(input);
      const dayNum = date.getDate();
      const monthNum = date.getMonth();
      const year = date.getFullYear();
      const monthName = monthNames()[date.getMonth()];
      const dayName = dayNames()[date.getDay()];

      if (format == 'day-month') {
        return `${dayName}, ${monthName} ${dayNum}${nth(dayNum)}`;
      }

      if (format == 'full') {
        return `${dayName}, ${monthName} ${dayNum}, ${year}`;
      }

      if (format == 'month-day-year') {
        return `${monthNum + 1}-${dayNum}-${year}`;
      }

      if (!format || format == 'default') {
        return `${monthName} ${dayNum}, ${year}`;
      }      
    }
    
  });

  eleventyConfig.addShortcode('year', () => {
    return `${new Date().getFullYear()}`;
  });

  eleventyConfig.addPassthroughCopy("src/static");

  eleventyConfig.addTransform('minifyHtml', (content, outputPath) => {
    // when eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath && (outputPath.endsWith('.html') || outputPath.endsWith('.xml'))) {
      return htmlMinifier.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      });
    }

    return content;
  });

  return {
    dir: {
      input: './src',
      output: './dist'
    },
    templateFormats: [
      'njk'
    ]
  };
};
