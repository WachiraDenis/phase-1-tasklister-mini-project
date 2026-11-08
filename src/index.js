
require('datejs');

function combineUsers(...arrays) {
  const users = arrays.flat();

  const merge_date = Date.today().toString("M/d/yyyy");

  return {
    users,
    merge_date
  };
}

module.exports = {
  combineUsers
};
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
