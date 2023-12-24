const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = new Array();
  const arr = domains.map(el => el.split(".").reverse());

  arr.forEach(el =>
    el.reduce((one, two) => {
      one += `.${two}`;
      res.push(one);
      return one;
    }, "")
  );

  const count = el => res.filter(element => element === el).length;
  return [...new Set(res)].reduce((co, el) => ({ ...co, [el]: count(el) }), {});
}

module.exports = {
  getDNSStats
};
