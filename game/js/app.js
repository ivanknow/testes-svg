(function() {
	var app = angular.module('game',[]);

	app.controller('BonecoController', function() {
		var that = this;
		this.titulo="Bonecos";
		this.posicao = {
			x : 0,
			y : 0,
			r:10
		};
		this.up = function() {
			console.log("up");
			if (this.posicao.y > 0) {
				this.posicao.y-=10;
			}
		}

		this.down = function() {
			if (this.posicao.y < 500) {
				this.posicao.y+=10;
			}
		}

		this.left = function() {
			console.log("left");
			if (this.posicao.x > 0) {
				this.posicao.x-=10;
			}
		}

		this.right = function() {
			console.log("right");
			this.posicao.x+=10;

		}
		
		this.atack = function() {
			
			this.posicao.r += 50;

		}

	});

})();