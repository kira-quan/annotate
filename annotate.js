(function(window, undefined){

	var annotations = { 
		// The other mode is edit
		mode: 'display',
		image: {},
		annotations: {},
		canvas: {},

		/* Image Functions */
		loadCanvas: function(canvasContainer, width, height){
			/* canvasContainer is an HTMLElement String, width and height are both numbers */ 
			this.canvas = Raphael(canvasContainer, width, height);
			return this.canvas;
		},
		loadImage: function(imagePath, width, height){ 
			if(this.canvas){ 
				this.image = canvas.image(imagePath, 0, 0, width, height);
			}
			else{ 
				throw "Canvas is currently not loaded";
			}
		},

		/* Comment Functions */
		addTextComment: function(comment,type){
			/* comment is a string with the text comment, type is either line or star */
			 switch(type){ 
			 	case 'line':
			 		this.addLineComment(comment);
			 		break;
			 	case 'star':
			 		this.addStarComment(comment);
			 		break;
			 	default:
			 		throw "Comment type not supported at this time";
			 		break;
			 }
		},

		addLineComment: function(comment){ 
		},

		addStarComment: function(comment){ 
		},

		/* Circle Functions */
	}
	

})(window);