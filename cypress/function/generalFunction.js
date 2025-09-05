export function goToShop(server,) {
    if (server == 'uat') {
        cy.visit('https://gfinn-fe-uat.codelabdev.co/shop/auth/sign-in');
        cy.get('#username').type('O-BT0005')
        cy.get('#password').type('0948144040')
        cy.contains('button', 'เข้าสู่ระบบ').click()
    }else if(server == 'prod'){
        cy.visit('https://client.gfinn.xyz/shop/loans');
        cy.get('#username').type('O-BT0005')
        cy.get('#password').type('0948144040')
        cy.contains('button', 'เข้าสู่ระบบ').click()
    }
    else if(server == 'uatPromax'){
        cy.visit('https://dev-remote-gfinn-frontend-uat.vrxjnc.easypanel.host/shop/calculation');
        cy.get('#username').type('0951385471')
        cy.get('#password').type('0951385471')
        cy.contains('button', 'เข้าสู่ระบบ').click()
    }
    
}