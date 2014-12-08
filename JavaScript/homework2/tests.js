QUnit.test("calculate Receipt", function(assert) {
	prices = [1, 10, 100, 1000];
	assert.deepEqual(calculateReceipt([0,0]), [0,0,0], "Empty two element");
	assert.deepEqual(calculateReceipt([0,0,0,0]), [0,0,0,0,0], "Empty four element");
	assert.deepEqual(calculateReceipt([1,1,1,1]), [1,10,100,1000, 1111], "Units, four elements");
	assert.deepEqual(calculateReceipt([1,2,3,4]), [1, 20, 300, 4000, 4321], "Regular Four elements");
});