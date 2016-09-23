(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2,
			description: 'Some gems have hidden qualities beyond their luster. The Dodecahedron will 100% of the time reflect light into your eyes.',
			canPurchase: true,
			soldOut: true
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'This gem has 5 sides. It has 5 sides that can cut you.',
			canPurchase: true,
			soldOut: false
		}
	];

})();