const { NODE_ENV } = process.env;

const getUrl = (domain) => {
  const appUrl = {
    test: {
      development: 'https://preprod-seturbiz.setur.software/anasayfa',    }
  };

  const domainUrl =
  appUrl.test.development;

  return  `${domainUrl}`;
};

module.exports = {
  getUrl
};
