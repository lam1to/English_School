const regexConfig = {
  lowerCase: /^[a-z]+$/,
  minOneLowerCase: /^(?=.*[a-z])/,
  minOneUpperCase: /^(?=.*[A-Z])/,
  minOneNumber: /^(?=.*[0-9])/,
  minOneSpecSymbol: /^(?=.*[!@#%&)(])/,
};

export default regexConfig;
