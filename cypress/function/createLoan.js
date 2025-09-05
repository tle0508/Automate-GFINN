export function createLoan(server) { 
    cy.wait(2000);
    cy.contains('span', 'รายการสินเชื่อ', { timeout: 10000 }).should('be.visible').parents('button').click()

    cy.wait(1000);

    cy.contains('button', 'สมัครสินเชื่อ', { timeout: 10000 }).should('be.visible').click()

    cy.wait(1000);

    selectProduct();
    
    cy.contains('button', 'ถัดไป').click()
    
    installmentInformation();

    cy.contains('button', 'ถัดไป').click()

    customerInformation(server);

    cy.contains('button', 'ถัดไป').click()

    productInformation();

    cy.contains('button', 'ถัดไป').click()
    
    documentList();

    cy.contains('button', 'บันทึก').click()
    cy.contains('button', 'ยืนยันการสมัครสินเชื่อ').click()
    
  }

  function selectProduct(){
    cy.contains('button', 'เลือกสินค้า', { timeout: 10000 })
    .should('be.visible')
    .click()
    cy.wait(1000);

  cy.get('.p-0').contains('h3', 'Samsung Galaxy A55 (12+128GB)').click()
  cy.get('#admin-loan-approval-edit-product-select-confirm-button').click();
  }

  function installmentInformation() {
    cy.get('#shop-loan-request-installment-form-imei-input').type('111111111111111');
    cy.get('#shop-loan-request-installment-form-serial-number-input').type('TEST-01111111111');   
    cy.get('#shop-loan-request-installment-form-down-payment-percent-select').click();
    cy.wait(2000);
  }

  function customerInformation(server){
    cy.get('#shop-loan-request-customer-info-form-prefix-select').click();
    cy.get('.p-1').within(() => {
      cy.contains('div', 'นาย').click();
    });
    cy.get('#shop-loan-request-customer-info-form-first-name-input').type('ศิรัณย');
    cy.get('#shop-loan-request-customer-info-form-last-name-input').type('สุนันทศิลป์');
    cy.get('#shop-loan-request-customer-info-form-nick-name-input').type('เทสค้าบบ');
    cy.get('button[type="button"][role="switch"]').eq(1).click();
    cy.get('#shop-loan-request-customer-info-form-id-card-input').type('codelabtest011');
    cy.get('#admin-loan-request-customer-info-form-nationality-select').click()
    cy.get('.p-1').within(() => {
      cy.contains('div', 'ลาว').click();
    });
    

    cy.get('#shop-loan-request-customer-info-form-birth-date-select').click()
    // เลือกปี 2547
    cy.get('.w-24').click()
    cy.contains('div', '2547').click()
    //เลืแกเดือนกุมภา
    goToFebruary();
    // เลือกวันที่ 5
    cy.contains('button[name="day"]', '5').click();

    cy.get('#shop-loan-request-customer-info-form-house-no-input').type('123');
    cy.get('button[name="address.province"]').click();
    cy.get('.p-1').within(() => {
      cy.contains('div', 'นนทบุรี').click();
    });
    cy.get('button[name="address.district"]').click();
    cy.get('.p-1').within(() => {
      cy.contains('div', 'เมืองนนทบุรี').click();
    });
    cy.get('button[name="address.subDistrict"]').click();
    cy.get('.p-1').within(() => {
      cy.contains('div', 'สวนใหญ่').click();
    });
    cy.get('input[name="googleMapLink"]').type('https://www.google.com/maps/place/14.442033005335867,101.06172437125745');
    
    
  if (server === 'uat') {
    cy.get('input[placeholder*="เบอร์หลัก"]').first().type('0911300000');
    cy.contains('button', 'ขอ OTP').click();
    cy.wait(1000);
    cy.get('input[maxlength="6"]').type('998930');
    cy.contains('button', 'ยืนยัน OTP').click();

  } else if (server === 'prod') {
    cy.get('input[placeholder*="เบอร์หลัก"]').first().type('0951385471');
    cy.contains('button', 'ขอ OTP').click();
    cy.wait(15000);
    cy.contains('button', 'ยืนยัน OTP').click();
  }
   
    
   
    cy.get('input[placeholder*="เบอร์สำรอง"]').first().type('0951385472');
    cy.get('input[placeholder*="อีเมล"]').first().type('test@gmail.com');
    cy.get('input[name="facebook"]').type('https://www.facebook.com/username');
    cy.get('input[name="facebookFriends"]').type('444');
    cy.get('input[name="facebookName"]').type('test');
    cy.get('input[name="lineId"]').type('test');
 
    cy.get('input[name="workAddress.workName"]').type('test');
    cy.contains('div span', '--เลือกกลุ่มอาชีพ--').click();
  
    cy.get('.p-1').within(() => {
        cy.contains('div', 'พนักงานบริษัท / เอกชน').click();
    });
    cy.contains('div span', '--เลือกอาชีพ--').click();
    cy.get('.p-1').within(() => {
         cy.contains('div', 'แอดมิน').click();
    });
    
    cy.get('input[name="salary"]').type('20000');
    cy.get('input[name="workAddress.houseNo"]').type('123');
    cy.get('button[name="workAddress.province"]').click();
    cy.get('.p-1').within(() => {
      cy.contains('div', 'กรุงเทพมหานคร').click();
    });
    cy.get('button[name="workAddress.district"]').click();
    cy.wait(500);
    cy.get('.p-1').within(() => {
      cy.contains('div', 'พระนคร').click();
    });
    cy.get('button[name="workAddress.subDistrict"]').click();
    cy.wait(500);
    cy.get('.p-1').within(() => {
      cy.contains('div', 'เสาชิงช้า').click();
    });

    cy.get('#shop-loan-request-customer-info-form-emergencyContact-0-prefix-select').click();
    cy.get('.p-1').first().within(() => {
      cy.contains('div', 'นาย').click();
    });
    cy.get('input[name="emergencyContact.0.firstName"]').type('test1');
    cy.get('input[name="emergencyContact.0.lastName"]').type('test1');
    cy.get('input[name="emergencyContact.0.phone"]').type('09111111111');
    cy.get('input[name="emergencyContact.0.relationship"]').type('test1');

    cy.get('#shop-loan-request-customer-info-form-references-0-prefix-select').click();
    cy.get('.p-1').first().within(() => {
      cy.contains('div', 'นาย').click();
    });
    cy.get('input[name="references.0.firstName"]').type('test1');
    cy.get('input[name="references.0.lastName"]').type('test1');
    cy.get('input[name="references.0.phone"]').type('09111111111');
    cy.get('input[name="references.0.relationship"]').type('test1');
    
    cy.get('#shop-loan-request-customer-info-form-references-1-prefix-select').click();
    cy.get('.p-1').first().within(() => {
      cy.contains('div', 'นางสาว').click();
    });
    cy.get('input[name="references.1.firstName"]').type('test2');
    cy.get('input[name="references.1.lastName"]').type('test2');
    cy.get('input[name="references.1.phone"]').type('0922222222');
    cy.get('input[name="references.1.relationship"]').type('test2');
    
  }
  function productInformation(){
    cy.get('button#pic1').find('input[type="file"]')
    .selectFile('cypress/fixtures/1.jpeg', { force: true });
    cy.get('button#pic2').find('input[type="file"]')
    .selectFile('cypress/fixtures/2.jpeg', { force: true });
    cy.get('button#pic3').find('input[type="file"]')
    .selectFile('cypress/fixtures/3.jpeg', { force: true });
    cy.get('button#pic4').find('input[type="file"]')
    .selectFile('cypress/fixtures/4.jpeg', { force: true });
    cy.get('button#pic5').find('input[type="file"]')
    .selectFile('cypress/fixtures/5.jpeg', { force: true });
    cy.get('button#pic6').find('input[type="file"]')
    .selectFile('cypress/fixtures/6.jpeg', { force: true });
   
    cy.get('#shop-loan-request-product-info-form-checkbox-item').click();
    // cy.get('#shop-loan-request-product-info-form-checkbox-item').click();
    // cy.get('#shop-loan-request-product-info-form-checkbox-item').click();
    // cy.get('#shop-loan-request-product-info-form-checkbox-item').click();
    // cy.get('#shop-loan-request-product-info-form-checkbox-item').click();
    // cy.get('#shop-loan-request-product-info-form-checkbox-item').click();

    cy.get('button#pic7').find('input[type="file"]')
    .selectFile('cypress/fixtures/1.jpeg', { force: true });
    // cy.get('button#pic8').find('input[type="file"]')
    // .selectFile('cypress/fixtures/2.jpeg', { force: true });
    // cy.get('button#pic9').find('input[type="file"]')
    // .selectFile('cypress/fixtures/3.jpeg', { force: true });
    // cy.get('button#pic10').find('input[type="file"]')
    // .selectFile('cypress/fixtures/4.jpeg', { force: true });
    // cy.get('button#pic11').find('input[type="file"]')
    // .selectFile('cypress/fixtures/5.jpeg', { force: true });
    // cy.get('button#pic12').find('input[type="file"]')
    // .selectFile('cypress/fixtures/6.jpeg', { force: true });

    cy.wait(8000);
  }
  function documentList(){
    cy.get('button#pic13').find('input[type="file"]')
    .selectFile('cypress/fixtures/1.jpeg', { force: true });
    cy.get('button#pic14').find('input[type="file"]')
    .selectFile('cypress/fixtures/2.jpeg', { force: true });
    cy.get('button#pic15').find('input[type="file"]')
    .selectFile('cypress/fixtures/3.jpeg', { force: true });
    cy.get('button#pic16').find('input[type="file"]')
    .selectFile('cypress/fixtures/4.jpeg', { force: true });
    cy.get('button#pic17').find('input[type="file"]')
    .selectFile('cypress/fixtures/5.jpeg', { force: true });
    cy.get('button#pic18').find('input[type="file"]')
    .selectFile('cypress/fixtures/6.jpeg', { force: true });
    cy.get('button#pic19').find('input[type="file"]')
    .selectFile('cypress/fixtures/1.jpeg', { force: true });
    cy.get('button#pic20').find('input[type="file"]')
    .selectFile('cypress/fixtures/2.jpeg', { force: true });
    cy.get('button#pic21').find('input[type="file"]')
    .selectFile('cypress/fixtures/3.jpeg', { force: true });
    cy.get('button#pic22').find('input[type="file"]')
    .selectFile('cypress/fixtures/4.jpeg', { force: true });
  
    cy.wait(10000);
  }

  function goToFebruary() {
    const currentMonth = new Date().getMonth() + 1; // 0-11 → 1-12
    const targetMonth = 2; // กุมภาพันธ์
  
    if (currentMonth > targetMonth) {
      const clicks = currentMonth - targetMonth;
      Cypress._.times(clicks, () => {
        cy.get('button[name="previous-month"]').click();
      });
    } else if (currentMonth < targetMonth) {
      const clicks = targetMonth - currentMonth;
      Cypress._.times(clicks, () => {
        cy.get('button[name="next-month"]').click();
      });
    }
    // ถ้า currentMonth == 2 ก็ไม่ต้องกด
  }
  