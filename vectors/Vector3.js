Vectors.Vector3 = function(x, y, z){
	this.x = x;
	this.y = y;
	this.z = z;
};

Vectors.AXIS_X = new Vectors.Vector3(1, 0, 0);
Vectors.AXIS_Y = new Vectors.Vector3(0, 1, 0);
Vectors.AXIS_Z = new Vectors.Vector3(0, 0, 1);