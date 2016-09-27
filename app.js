(function(){
	var app = angular.module('store', ['store-products']);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product){
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});	

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2,
			description: 'Some gems have hidden qualities beyond their luster. The Dodecahedron will 100% of the time reflect light into your eyes.',
			canPurchase: true,
			soldOut: true,
			image: 'images/gem-01.gif',
			reviews:[
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@thomas.com"
				},
				{
					stars: 3,
					body: "Product is OK",
					author: "tim@what.com"
				}
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'This gem has 5 sides. It has 5 sides that can cut you.',
			canPurchase: true,
			soldOut: false,
			image: 'images/gem-02.gif',
			reviews:[
				{
					stars: 4,
					body: "I love this product!",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "Product is OK",
					author: "tim@what.com"
				}
			]
		}
	];

})();