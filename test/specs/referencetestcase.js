describe('webdriver.io page',  () => {
    it('should have the right title',  async () => {
        /* Elements */
        const userNameTextBox = await $('#okta-signin-username');
        const passwordTextBox = await $('#input8');//input8
        const securityAnswerTextBox = await $('#input11');
        const qa = await $('//li[contains(.,"Backoffice - QA")]');
         const importButton = await $('.btn.m-l-15.bg-orange');
         const fileUpload = await $('#avatar');
         const dropdown = await $('.form-control.custom-select');
         const language = await $('[name="language"]');
         const priewButton = await $('.submit-section .btn.bg-blue');
 
        /* Window Resize */
        browser.setWindowSize(1349, 3946.03);
        /* to hit url [we can baseurl in wdio.conf.js  ]*/
         await browser.url('/');
        /* expect to wait for element */
        await userNameTextBox.waitForExist({ timeout: 5000 });
        /* setValue is act as sendkeys */
         await userNameTextBox.setValue("mohamed.basheer@oportun.com");
         /* Enter key */
         await browser.keys("Enter");
        /* expect to wait for element */
         await passwordTextBox.waitForExist({ timeout: 5000 });
        /* setValue is act as sendkeys */
         await passwordTextBox.setValue("Yuvraj@123");
        /* Enter key */
         await browser.keys("Enter");
         await securityAnswerTextBox.waitForExist({ timeout: 5000 });
         await securityAnswerTextBox.setValue("sachin");
         await browser.keys("Enter");
        //  await browser.pause(10000);
        await qa.waitForExist({ timeout: 5000 });
         await qa.click();
         await browser.pause(10000);
        /* swirched to anotherframe using url */
        await browser.switchWindow("https://ng-backoffice.1.app.qa.pfops.com/");
         await importButton.waitForExist({ timeout: 5000 });
        /* upload a document file */
    const remoteFilePath = await browser.uploadFile('C:/webdriverio/test/specs/PaymentsReciept.doc');
    await fileUpload.setValue(remoteFilePath);
    /* To select a dropdown by index */
    await dropdown.selectByIndex(15)
    /* It is used to clear input box */
    await language.clearValue();
    await language.waitForExist({ timeout: 5000 });
    await language.setValue("ES");
    await priewButton.waitForExist({ timeout: 5000 })
    await priewButton.click();
    await browser.pause(10000);
    })
})