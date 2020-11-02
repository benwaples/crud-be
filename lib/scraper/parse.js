const parseDoc = doc => {

  const address = doc.querySelector('.address').textContent;
  const images = doc.querySelector('#__next > div:nth-child(2) > div > div:nth-child(2) > div > div > section.hero-carousel > div.photo-gallery > div > div.slick-list > div > div.slick-slide.slick-active.slick-current > div > div > picture > img').src;
  const price = doc.querySelector('.price').textContent ? doc.querySelector('.price').textContent : 'couldnt grap price';
  const lotSQFT = doc.querySelector('#__next > div:nth-child(2) > div > div:nth-child(2) > div > div > div > main > section.jsx-3683463461.section-listing-summary > div.jsx-3683463461.pos-relative.starting-div > div.jsx-1959108432.listing-information-cmp > div.jsx-2256820618.meta-section.ldpMeta > ul > li:nth-child(4) > span.jsx-2256820618.meta-value').textContent ? doc.querySelector('#__next > div:nth-child(2) > div > div:nth-child(2) > div > div > div > main > section.jsx-3683463461.section-listing-summary > div.jsx-3683463461.pos-relative.starting-div > div.jsx-1959108432.listing-information-cmp > div.jsx-2256820618.meta-section.ldpMeta > ul > li:nth-child(4) > span.jsx-2256820618.meta-value').textContent : 'couldnt grap lot size';
  const houseSQFT = doc.querySelector('#__next > div:nth-child(2) > div > div:nth-child(2) > div > div > div > main > section.jsx-3683463461.section-listing-summary > div.jsx-3683463461.pos-relative.starting-div > div.jsx-1959108432.listing-information-cmp > div.jsx-2256820618.meta-section.ldpMeta > ul > li:nth-child(3) > span.jsx-2256820618.meta-value').textContent ? doc.querySelector('#__next > div:nth-child(2) > div > div:nth-child(2) > div > div > div > main > section.jsx-3683463461.section-listing-summary > div.jsx-3683463461.pos-relative.starting-div > div.jsx-1959108432.listing-information-cmp > div.jsx-2256820618.meta-section.ldpMeta > ul > li:nth-child(3) > span.jsx-2256820618.meta-value').textContent : 'couldnt grap house size ';
  const saleStatus = doc.querySelector('#__next > div:nth-child(2) > div > div:nth-child(2) > div > div > section.hero-carousel > div.jsx-3501245071.photo-gallery-overlay > div.jsx-1824614128.property-labels > span.jsx-3484526439.label.label-dark-transparent').textContent ? doc.querySelector('#__next > div:nth-child(2) > div > div:nth-child(2) > div > div > section.hero-carousel > div.jsx-3501245071.photo-gallery-overlay > div.jsx-1824614128.property-labels > span.jsx-3484526439.label.label-dark-transparent').textContent : 'couldnt grap sale status';
  const lastSold = doc.querySelector('#__next > div:nth-child(2) > div > div:nth-child(2) > div > div > div > main > section.jsx-3683463461.section-listing-summary > div.jsx-488154125.listing-summary-indicators-cmp.clearfix > ul > li:nth-child(2) > div > span.jsx-488154125.value.ellipsis').textContent ? doc.querySelector('#__next > div:nth-child(2) > div > div:nth-child(2) > div > div > div > main > section.jsx-3683463461.section-listing-summary > div.jsx-488154125.listing-summary-indicators-cmp.clearfix > ul > li:nth-child(2) > div > span.jsx-488154125.value.ellipsis').textContent : 'couldnt grap last sold';

  return {
    address: !address ? 'couldnt grap address' : address, 
    images: !images ? 'couldnt grap images' : images, 
    price,
    lotSQFT, 
    houseSQFT, 
    saleStatus, 
    lastSold, 
  };
};

module.exports = { parseDoc };
