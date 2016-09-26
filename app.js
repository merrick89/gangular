(function(){
	var app = angular.module('store', []);

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

	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/product-title.html'
		};
	});

	app.directive('productPanels',function(){
		return{
			restrict: 'E',
			templateUrl: 'templates/product-panels.html',
			controller: function(){
				this.tab = 1;

				this.selectTab = function(setTab){
					this.tab = setTab;
				};
				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				};
			},
			controllerAs: 'panel'
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