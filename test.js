const stringToTest = 'AcoDQeYjrSlByFtyzQhvjoCNVpsaLeQPtGUjQHVzbgabJuAiMHDxwfkNvCwIGmZCTInlSiKvRKxAGzJsgmPeUBAReDzmLzqgJgrXobzfoWiwvRPdFgJzIkSoJscWtVdEbuIRYhXOdHkayBdFIMHSyzIJtmGMhJTiFBaDIzrngCngdSnngUHFWpQpCwElHxunYWsiXKvFOkntcAHiXopTgIKkeovoLrBlPTtMfqTTAgnejUPgKeBsolCtAAjNtKBjf';

function findEmail(value) {
  const START_NUMBER = 1;
  const FINAL_LETTERS_LENGTH = 10;
  const EMAIL_SUFFIX = 'aoop.com.br'

  const stringValue = String(value);

  let previous = 0;
  let current = START_NUMBER;
  let next = 0;
  
  let lettersList = [];
  
  while (next < stringValue.length && lettersList.length < FINAL_LETTERS_LENGTH) {
    next = previous + current
  
    previous = current;
    current = next;
  
    lettersList.push(stringValue.substr(next, 1));
  }
  
  const letterListString = lettersList.join('').toLowerCase();
  
  const prefix = `${letterListString.substr(0, 5)}.${letterListString.substr(5)}`;
  const email = `${prefix}@${EMAIL_SUFFIX}`;

  return email;
}

const email = findEmail(stringToTest);

console.log(`The e-mail is ${email}. 🎉`);