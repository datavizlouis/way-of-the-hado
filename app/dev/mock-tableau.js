// Local-preview stand-in for the Tableau Extensions API. Only the calls the app uses
// are implemented: initializeAsync, workbook.getAllDataSourcesAsync, ds.queryAsync.
(function () {
  function parseCsv(text) {
    var rows = [];
    var row = [];
    var field = '';
    var q = false;
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      if (q) {
        if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
        else if (c === '"') q = false;
        else field += c;
      } else if (c === '"') q = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\n' || c === '\r') {
        if (c === '\r' && text[i + 1] === '\n') i++;
        row.push(field); field = '';
        if (row.length > 1 || row[0] !== '') rows.push(row);
        row = [];
      } else field += c;
    }
    if (field || row.length) { row.push(field); rows.push(row); }
    var head = rows.shift();
    return rows.map(function (r) {
      var o = {};
      head.forEach(function (h, j) { o[h] = r[j]; });
      return o;
    });
  }
  var sources = Object.keys(window.__CSV__).map(function (name) {
    var data = parseCsv(window.__CSV__[name]);
    return {
      name: name,
      queryAsync: function (query) {
        return new Promise(function (res) {
          setTimeout(function () {
            res({
              data: data.map(function (r) {
                var o = {};
                query.fields.forEach(function (f) {
                  var v = r[f.fieldCaption];
                  if (f.function === 'SUM' || /^(Chapter|Order|Year)$/.test(f.fieldCaption)) v = Number(v);
                  o[f.fieldAlias || f.fieldCaption] = v;
                });
                return o;
              }),
            });
          }, 120);
        });
      },
    };
  });
  window.tableau = {
    extensions: {
      initializeAsync: function () { return Promise.resolve(); },
      workbook: { getAllDataSourcesAsync: function () { return Promise.resolve(sources); } },
    },
  };
})();
