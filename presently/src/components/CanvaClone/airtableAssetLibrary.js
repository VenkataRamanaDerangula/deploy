import Airtable from 'airtable';

// Your Airtable Read-Only API Key
let AIRTABLE_API_KEY = 'patFh7wC3oU9RDyf8.dc9a4bcf0f23d1c2ff21bca89bcd074615a14b9f0b6d297991be1d4ca9063d94';

let base;
if (AIRTABLE_API_KEY !== '') {
  base = new Airtable({
    apiKey: AIRTABLE_API_KEY
  }).base('appHAZoD6Qj3teOmr');
}

export const queryAirtable = ({ query, page, perPage }) => {
  let records = [];
  return new Promise(function (resolve, reject) {
    base('Asset sources')
      .select({
        maxRecords: perPage || 100,
        view: 'Grid view',
        filterByFormula: query
          ? "AND({Name} != '', SEARCH(LOWER('" + query + "'), LOWER({Name})))"
          : "{Name} != ''"
      })
      .eachPage(
        function page(pageRecords, fetchNextPage) {
          pageRecords.forEach(function (record) {
            const asset = {
              name: record.get('Name'),
              image: record.get('Image')[0]
            };
            records = [...records, asset];
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
          resolve({ results: records });
        }
      );
  });
};

export const findAirtableAssets = async (type, queryData) => {
  if (AIRTABLE_API_KEY === '' && !window.airtableWarning) {
    window.airtableWarning = true;
    alert(`Please provide your Airtable API key.`);
    return;
  }

  const response = await queryAirtable({
    query: queryData.query,
    page: queryData.page,
    perPage: queryData.perPage
  });
  const { results } = response;

  return {
    assets: results.map(translateToAssetResult),
    total: 99999, // Airtable does not return a total number
    currentPage: 1,
    nextPage: undefined
  };
};

function translateToAssetResult({ image }) {
  return {
    id: image.id,
    type: 'ly.img.image',
    locale: 'en',
    label: image.name ?? undefined,
    thumbUri: image.thumbnails.large.url,
    size: {
      width: image.width,
      height: image.height
    },
    meta: {
      uri: image.url
    },
    context: {
      sourceId: 'airtable'
    }
  };
}
