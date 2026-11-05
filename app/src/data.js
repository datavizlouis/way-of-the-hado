// Live data access through the Tableau Extensions API.
//
// The workbook wires three embedded-file datasources (see tableau/ and data/):
//   "Story"             - intro chapters
//   "Characters"        - roster, bios, special moves, palette
//   "Franchise Metrics" - sales / box office / arcade figures with sources
// Each is found by caption and queried with queryAsync() at view time.

export const DS = {
  story: 'Story',
  characters: 'Characters',
  metrics: 'Franchise Metrics',
};

const QUERIES = {
  [DS.story]: {
    dims: ['Chapter', 'Era', 'Title', 'Kicker', 'Body', 'Accent'],
    sort: 'Chapter',
  },
  [DS.characters]: {
    dims: ['Order', 'Id', 'Name', 'Country', 'Style', 'Debut', 'Tagline', 'Bio', 'Moves', 'Theme', 'Palette', 'Build'],
    sort: 'Order',
  },
  [DS.metrics]: {
    dims: ['Franchise', 'Title', 'Year', 'Category', 'Unit', 'Source', 'Source URL', 'As Of', 'Note'],
    measures: ['Value'],
  },
};

function extractData(result) {
  return result && Array.isArray(result.data) ? result.data : [];
}

function buildQuery(spec) {
  const fields = spec.dims.map((d) => ({ fieldCaption: d, fieldAlias: d }));
  (spec.measures || []).forEach((m) => fields.push({ fieldCaption: m, function: 'SUM', fieldAlias: m }));
  return { fields };
}

function getDataSources() {
  const wb = tableau.extensions.workbook;
  if (wb && typeof wb.getAllDataSourcesAsync === 'function') return wb.getAllDataSourcesAsync();
  const wc = tableau.extensions.worksheetContent;
  if (wc && wc.worksheet && typeof wc.worksheet.getDataSourcesAsync === 'function') {
    return wc.worksheet.getDataSourcesAsync();
  }
  return Promise.resolve([]);
}

/** Initialise the extension and query all three datasources. */
export async function loadAll() {
  if (!window.tableau || !tableau.extensions) throw new Error('Extensions API not loaded');
  await tableau.extensions.initializeAsync();
  const list = await getDataSources();
  const byName = new Map((list || []).map((ds) => [ds.name, ds]));
  const out = { loadedAt: new Date() };
  const missing = [];
  await Promise.all(
    Object.entries(DS).map(async ([key, name]) => {
      const ds = byName.get(name);
      if (!ds) {
        missing.push(name);
        out[key] = [];
        return;
      }
      const spec = QUERIES[name];
      const rows = extractData(await ds.queryAsync(buildQuery(spec)));
      if (spec.sort) rows.sort((a, b) => Number(a[spec.sort]) - Number(b[spec.sort]));
      out[key] = rows;
    }),
  );
  out.missing = missing;
  out.sourceNames = (list || []).map((d) => d.name);
  return out;
}
