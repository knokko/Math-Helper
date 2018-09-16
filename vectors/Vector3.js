Vectors.Vector3 = function(x, y, z){
	this.x = x;
	this.y = y;
	this.z = z;
};

Vectors.Vector3.prototype.substract = function(other, dest){
	if(dest === undefined){
		dest = this;
	}
	if(dest === null){
		dest = new Vectors.Vector3();
	}
	dest.x = this.x - other.x;
	dest.y = this.y - other.y;
	dest.z = this.z - other.z;
	return dest;
};

Vectors.Vector3.prototype.add = function(other, dest){
	if(dest === undefined){
		dest = this;
	}
	if(dest === null){
		dest = new Vectors.Vector3();
	}
	dest.x = this.x + other.x;
	dest.y = this.y + other.y;
	dest.z = this.z + other.z;
	return dest;
};

Vectors.Vector3.prototype.dot = function(other){
	return this.x * other.x + this.y * other.y + this.z * other.z;
};

Vectors.Vector3.prototype.cross = function(other, dest){
	if(dest === undefined){
		dest = this;
	}
	if(dest === null){
		dest = new Vectors.Vector3();
	}
	const x = this.y * other.z - this.z * other.y;
	const y = this.z * other.x - this.x * other.z;
	const z = this.x * other.y - this.y * other.x;
	dest.x = x;
	dest.y = y;
	dest.z = z;
	return dest;
};

Vectors.Vector3.prototype.length = function(){
	return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
};

Vectors.Vector3.prototype.negate = function(dest){
	if(dest === undefined){
		dest = this;
	}
	if(dest === null){
		dest = new Vectors.Vector3();
	}
	dest.x = -this.x;
	dest.y = -this.y;
	dest.z = -this.z;
	return dest;
};

Vectors.Vector3.prototype.toString = function(){
	return '(' + this.x + ', ' + this.y + ', ' + this.z + ')';
};

Vectors.AXIS_X = new Vectors.Vector3(1, 0, 0);
Vectors.AXIS_Y = new Vectors.Vector3(0, 1, 0);
Vectors.AXIS_Z = new Vectors.Vector3(0, 0, 1);