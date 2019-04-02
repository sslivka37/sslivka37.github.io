describe('button.onclick', function() {
    // Our individual tests go here
    it('should_show_bio_information', function() {
        // Actual test goes in here
       
        var modal = document.getElementById("bioModal");
		var button = document.getElementById("bioButton");

		button.onclick = function() {
		modal.style.display = "block";
		};



        button.onclick();
         expect(modal.style.display()).toEqual("block")
    });
});

//describe('addTwoNumbers' function() {
   //it('returns \'3\' when given \'1\' and \'2\' as parameters', function() {
       // Actual test goes in here
 //  });
// });