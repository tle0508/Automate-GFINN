import { createLoan } from "../function/createLoan";
import { goToShop } from "../function/generalFunction"

describe('create loan on prod', () => {
  it('create loan', () => {
     goToShop('prod');
     createLoan();
  })
})