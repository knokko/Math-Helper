Vectors.Vector4 = function(x, y, z, w){
	this.x = x;
	this.y = y;
	this.z = z;
	this.w = w;
};

Vectors.Vector4.prototype.toString = function(){
	return '(' + this.x + ', ' + this.y + ', ' + this.z + ', ' + this.w + ')';
};