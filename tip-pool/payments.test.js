describe('payments test', function() {
    beforeEach(function() {
        billAmtInput.value = 1000;
        tipAmtInput.value = 100;
    });

    it('should add payment info to the table when running submitPaymentInfo()', function() {
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('1000');
        expect(allPayments['payment1'].tipAmt).toEqual('100');
        expect(allPayments['payment1'].tipPercent).toEqual(10);
    });

    it('should create a table with payment info when running appendPaymentTable', function() {
        let curPayment = createCurPayment();
    allPayments['payment1'] = curPayment;

    appendPaymentTable(curPayment);

    let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

    expect(curTdList.length).toEqual(3);
    expect(curTdList[0].innerText).toEqual('$1000');
    expect(curTdList[1].innerText).toEqual('$100');
    expect(curTdList[2].innerText).toEqual('10%');
    });

    it('should create a new payment when running createCurPayment()', function() {
        expect(createCurPayment()).toEqual({billAmt: '1000', tipAmt: '100', tipPercent: 10});
    })

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
        paymentTbody.innerHTML = '';
        paymentId = 0;
    });
});