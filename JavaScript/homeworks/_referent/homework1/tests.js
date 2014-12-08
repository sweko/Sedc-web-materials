QUnit.test("numberToWords", function(assert) {
	assert.equal(numberToWords(1), "One", "One");
	assert.equal(numberToWords(2), "Two", "Two");
	assert.equal(numberToWords(10), "Ten", "Ten");
	assert.equal(numberToWords(11), "Eleven", "11");
	assert.equal(numberToWords(21), "Twenty one", "21");
	assert.equal(numberToWords(192), "One hundred ninety two", 192);
	assert.equal(numberToWords(1187), "One thousand one hundred eighty seven",1187);
	assert.equal(numberToWords(2000), "Two thousand",2000);
	assert.equal(numberToWords(21011), "Twenty one thousand eleven",21011);
	assert.equal(numberToWords(1000000), "One million","Million");
	assert.equal(numberToWords(12341678), "Twelve million three hundred forty one thousand six hundred seventy eight",12341678);
	assert.equal(numberToWords(128341000901), "One hundred twenty eight billion three hundred forty one million nine hundred one",128341000901);
	assert.equal(numberToWords(128341679000), "One hundred twenty eight billion three hundred forty one million six hundred seventy nine thousand",128341679000);
	assert.equal(numberToWords(128341679901), "One hundred twenty eight billion three hundred forty one million six hundred seventy nine thousand nine hundred one",128341679901);
});