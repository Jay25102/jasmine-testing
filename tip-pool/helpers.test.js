describe("Helpers testing", function() {
    beforeEach(function() {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });

    it('should sum up total tips with sumPaymentTotal()', function() {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(60);
    });

    it('should calculate the right percentage of tip with calculateTipPercent()', function() {
        expect(calculateTipPercent(1000, 150)).toEqual(15);
    });

    it('should create a new td and append to the table with appendTd(tr, value)', function() {
        let temp = document.createElement('tr');
        appendTd(temp, 'testing');
        expect(temp.children.length).toEqual(1);
        expect(temp.firstChild.innerHTML).toEqual('testing');
    })

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
      });
});