var CharacterRightSleve = CharacterPart.extend({
	classId: 'CharacterRightSleve',

	init: function (container) {
		var self = this;
		self._part = 'rs';
		self._depthTemp = 4;
		self._style = container.data('shirt_rs');
		self._customFPS = $CHARACTER_FPS / 2;
		self._container = container;

		CharacterPart.prototype.init.call(this);
	},

	changedDirection: function(container, direction) {
		this._scale.x = 1;
		this.show();

		switch(direction) {
			case 'NW': this._scale.x = -1; 	
			case 'NE': 
				this.setTexture(0);  
			break;

			case 'W' : 
				this.hide();
			break;

			case 'E' : 
				this.setTexture(1);
			break;

			case 'SW': this._scale.x = -1; 	
			case 'SE' : 
				this.setTexture(2);  
			break;

			case 'S' : 
				this.setTexture(3);  
			break;

			case 'N' : 
				this.setTexture(7);  
			break;	
		}
	},

	getWalkingAnimation: function(vDir) {
		var frames = [], start, action, part, style, direction, subsection;

		for (var i = 0; i < ANIMATION_FRAMES['wlk_arm'].length; i++) {
			start 		= 'h',
			action		= 'wlk',
			part 		= this._part,
			style 		= this._container.data('shirt_rs'),
			direction 	= vDir,
			subsection  = ANIMATION_FRAMES['wlk_arm'][i];

			frames.push(start+'_'+action+'_'+part+'_'+style+'_'+direction+'_'+subsection+'.png');
		}

		return frames;
	},
});