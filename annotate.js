(function(window, undefined){

	var comment = {
		typ: 'text',
		el: {},

		init: function(typ, element){ 
			this.typ = typ;
			this.el = element;
			return this;
		}
	},

	var annotate = { 
		image: {},
		annotations: array(),
		canvas: {},

		/* General and Image Functions */
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

		loadAnnotations: function(data){
			annotations = JSON.parse(data, function(key, value){ 
				// TODO: Come back and fill this out
				return value;
			}) 
		},

		exportAnnotations: function(){
			// TODO: Check this 
			jsonAnnotations = JSON.stringify(this.annotations);
			return jsonAnnotations;
		},

		changeMode: function(newMode){ 
			/* mode can either be display or edit */
			this.mode = newMode;
		},

		/* Comment Functions */
		addComment: function(comment,type, x1, y1, x2, y2, x3, y3){
			/* 
			 comment is a string with the text comment
			 type is either line, star, or text
			 x1, y1 are the positional parameters of the text 
			 x2, y2 are the top positional parameters for the line or the the position of the center of the star (omitted for text)
			 x3, y3 are the bottom positional parameters for the line (omitted for text or star)
	
			 */
			
			switch(type){ 
			 	case 'line':
			 		this.addLineComment(comment, x1, y1, x2, y2, x3, y3);
			 		break;
			 	case 'star':
			 		this.addStarComment(comment, x1, y1, x2, y2);
			 		break;
			 	case 'text':
			 		this.addTextComment(comment, x1, y1);
			 		break;
			 	default:
			 		throw "Comment type not supported at this time";
			 		break;
			 }
		},

		addTextComment: function(comment, x1, y1){ 
			paper = this.canvas;
			raphaelElement = paper.print(x1, y1, comment, paper.getFont("Museo"), 12, "middle", 0);
			raphaelElement.attr({fill: "#fff"});
			textComment = comment.init('text', raphaelElement);
			this.annotations.push(textComment);

		},

		addLineComment: function(comment, x1, y1, x2, y2, x3, y3){ 
			paper = this.canvas;
			commentSet = paper.set();

			raphaelElement = paper.print(x1, y1, comment, paper.getFont("Museo"), 12, "middle", 0);
			raphaelElement.attr({fill: "#fff"});

			lineString = "M"+x2+","+y2+"L"+x3+","+y3;
			lineElement = paper.path(lineString);

			bboxElement = raphaelElement.getBBox();
			connectingString = "M"+(x2-x3)/2 + "," + y2 + "L" + bbboxElement.x + "," + bboxElement.y - (bboxElement.height/2);
			connectingElement = paper.path(connectingString);

			set.push(raphaelElement, lineElement, connectingElement);

			lineComment = comment.init('line', commentSet);
			this.annotations.push(lineComment);
		},

		addStarComment: function(comment, x1, y1, x2, y2){ 
		},

		/* Circle Functions */
	}
	

})(window);