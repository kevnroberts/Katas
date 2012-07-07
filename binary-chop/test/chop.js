module("chop");

function runTests(num){
	equal(chop[num](3, []), -1);
	equal(chop[num](3, [1]), -1);
	equal(chop[num](1, [1]), 0);

	equal(chop[num](1, [1, 3, 5]), 0);
	equal(chop[num](3, [1, 3, 5]), 1);
	equal(chop[num](5, [1, 3, 5]), 2);
	equal(chop[num](0, [1, 3, 5]), -1);
	equal(chop[num](2, [1, 3, 5]), -1);
	equal(chop[num](4, [1, 3, 5]), -1);
	equal(chop[num](6, [1, 3, 5]), -1);

	equal(chop[num](1, [1, 3, 5, 7]), 0);
	equal(chop[num](3, [1, 3, 5, 7]), 1);
	equal(chop[num](5, [1, 3, 5, 7]), 2);
	equal(chop[num](7, [1, 3, 5, 7]), 3);
	equal(chop[num](0, [1, 3, 5, 7]), -1);
	equal(chop[num](2, [1, 3, 5, 7]), -1);
	equal(chop[num](4, [1, 3, 5, 7]), -1);
	equal(chop[num](6, [1, 3, 5, 7]), -1);
	equal(chop[num](8, [1, 3, 5, 7]), -1);
}

test("chop v. 1", function(){
	runTests(1);
});

test("chop v. 2", function(){
	runTests(2);
});