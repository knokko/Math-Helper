Matrices.Matrix4 = function(){
	this.setZero();
};

Matrices.Matrix4.prototype.setIdentity = function(){
	this.m00 = 1;
	this.m01 = 0;
	this.m02 = 0;
	this.m03 = 0;
	this.m10 = 0;
	this.m11 = 1;
	this.m12 = 0;
	this.m13 = 0;
	this.m20 = 0;
	this.m21 = 0;
	this.m22 = 1;
	this.m23 = 0;
	this.m30 = 0;
	this.m31 = 0;
	this.m32 = 0;
	this.m33 = 1;
	return this;
};

Matrices.Matrix4.prototype.setZero = function(){
	this.m00 = 0;
	this.m01 = 0;
	this.m02 = 0;
	this.m03 = 0;
	this.m10 = 0;
	this.m11 = 0;
	this.m12 = 0;
	this.m13 = 0;
	this.m20 = 0;
	this.m21 = 0;
	this.m22 = 0;
	this.m23 = 0;
	this.m30 = 0;
	this.m31 = 0;
	this.m32 = 0;
	this.m33 = 0;
	return this;
};

Matrices.Matrix4.prototype.clone = function(dest){
	if(dest === undefined){
		dest = new Matrices.Matrix4();
	}
	dest.m00 = this.m00;
	dest.m01 = this.m01;
	dest.m02 = this.m02;
	dest.m03 = this.m03;
	dest.m10 = this.m10;
	dest.m11 = this.m11;
	dest.m12 = this.m12;
	dest.m13 = this.m13;
	dest.m20 = this.m20;
	dest.m21 = this.m21;
	dest.m22 = this.m22;
	dest.m23 = this.m23;
	dest.m30 = this.m30;
	dest.m31 = this.m31;
	dest.m32 = this.m32;
	dest.m33 = this.m33;
	return dest;
};

Matrices.Matrix4.prototype.add = function(other, dest){
	if(dest === undefined){
		dest = this;
	}
	dest.m00 = this.m00 + other.m00;
	dest.m01 = this.m01 + other.m01;
	dest.m02 = this.m02 + other.m02;
	dest.m03 = this.m03 + other.m03;
	dest.m10 = this.m10 + other.m10;
	dest.m11 = this.m11 + other.m11;
	dest.m12 = this.m12 + other.m12;
	dest.m13 = this.m13 + other.m13;
	dest.m20 = this.m20 + other.m20;
	dest.m21 = this.m21 + other.m21;
	dest.m22 = this.m22 + other.m22;
	dest.m23 = this.m23 + other.m23;
	dest.m30 = this.m30 + other.m30;
	dest.m31 = this.m31 + other.m31;
	dest.m32 = this.m32 + other.m32;
	dest.m33 = this.m33 + other.m33;
	return dest;
};

Matrices.Matrix4.prototype.substract = function(other, dest){
	if(dest === undefined){
		dest = this;
	}
	dest.m00 = this.m00 - other.m00;
	dest.m01 = this.m01 - other.m01;
	dest.m02 = this.m02 - other.m02;
	dest.m03 = this.m03 - other.m03;
	dest.m10 = this.m10 - other.m10;
	dest.m11 = this.m11 - other.m11;
	dest.m12 = this.m12 - other.m12;
	dest.m13 = this.m13 - other.m13;
	dest.m20 = this.m20 - other.m20;
	dest.m21 = this.m21 - other.m21;
	dest.m22 = this.m22 - other.m22;
	dest.m23 = this.m23 - other.m23;
	dest.m30 = this.m30 - other.m30;
	dest.m31 = this.m31 - other.m31;
	dest.m32 = this.m32 - other.m32;
	dest.m33 = this.m33 - other.m33;
	return dest;
};

Matrices.Matrix4.prototype.multiply = function(other, dest){
	if(dest === undefined){
		dest = this;
	}
	const m00 = this.m00 * other.m00 + this.m10 * other.m01 + this.m20 * other.m02 + this.m30 * other.m03;
	const m01 = this.m01 * other.m00 + this.m11 * other.m01 + this.m21 * other.m02 + this.m31 * other.m03;
	const m02 = this.m02 * other.m00 + this.m12 * other.m01 + this.m22 * other.m02 + this.m32 * other.m03;
	const m03 = this.m03 * other.m00 + this.m13 * other.m01 + this.m23 * other.m02 + this.m33 * other.m03;
	const m10 = this.m00 * other.m10 + this.m10 * other.m11 + this.m20 * other.m12 + this.m30 * other.m13;
	const m11 = this.m01 * other.m10 + this.m11 * other.m11 + this.m21 * other.m12 + this.m31 * other.m13;
	const m12 = this.m02 * other.m10 + this.m12 * other.m11 + this.m22 * other.m12 + this.m32 * other.m13;
	const m13 = this.m03 * other.m10 + this.m13 * other.m11 + this.m23 * other.m12 + this.m33 * other.m13;
	const m20 = this.m00 * other.m20 + this.m10 * other.m21 + this.m20 * other.m22 + this.m30 * other.m23;
	const m21 = this.m01 * other.m20 + this.m11 * other.m21 + this.m21 * other.m22 + this.m31 * other.m23;
	const m22 = this.m02 * other.m20 + this.m12 * other.m21 + this.m22 * other.m22 + this.m32 * other.m23;
	const m23 = this.m03 * other.m20 + this.m13 * other.m21 + this.m23 * other.m22 + this.m33 * other.m23;
	const m30 = this.m00 * other.m30 + this.m10 * other.m31 + this.m20 * other.m32 + this.m30 * other.m33;
	const m31 = this.m01 * other.m30 + this.m11 * other.m31 + this.m21 * other.m32 + this.m31 * other.m33;
	const m32 = this.m02 * other.m30 + this.m12 * other.m31 + this.m22 * other.m32 + this.m32 * other.m33;
	const m33 = this.m03 * other.m30 + this.m13 * other.m31 + this.m23 * other.m32 + this.m33 * other.m33;
	dest.m00 = m00;
	dest.m01 = m01;
	dest.m02 = m02;
	dest.m03 = m03;
	dest.m10 = m10;
	dest.m11 = m11;
	dest.m12 = m12;
	dest.m13 = m13;
	dest.m20 = m20;
	dest.m21 = m21;
	dest.m22 = m22;
	dest.m23 = m23;
	dest.m30 = m30;
	dest.m31 = m31;
	dest.m32 = m32;
	dest.m33 = m33;
	return dest;
};

Matrices.Matrix4.prototype.transform = function(other, dest){
	if(dest === undefined){
		dest = new Vectors.Vector4();
	}
	let x;
	let y;
	let z;
	let w;
	if(other instanceof Vectors.Vector3){
		x = this.m00 * other.x + this.m10 * other.y + this.m20 * other.z + this.m30;
		y = this.m01 * other.x + this.m11 * other.y + this.m21 * other.z + this.m31;
		z = this.m02 * other.x + this.m12 * other.y + this.m22 * other.z + this.m32;
		w = this.m03 * other.x + this.m13 * other.y + this.m23 * other.z + this.m33;
	}
	else {//Vector4
		x = this.m00 * other.x + this.m10 * other.y + this.m20 * other.z + this.m30 * other.w;
		y = this.m01 * other.x + this.m11 * other.y + this.m21 * other.z + this.m31 * other.w;
		z = this.m02 * other.x + this.m12 * other.y + this.m22 * other.z + this.m32 * other.w;
		w = this.m03 * other.x + this.m13 * other.y + this.m23 * other.z + this.m33 * other.w;
	}
	dest.x = x;
	dest.y = y;
	dest.z = z;
	dest.w = w;
	return dest;
};

Matrices.Matrix4.prototype.transpose = function(dest){
	if(dest === undefined){
		dest = this;
	}
	const m00 = this.m00;
	const m01 = this.m10;
	const m02 = this.m20;
	const m03 = this.m30;
	const m10 = this.m01;
	const m11 = this.m11;
	const m12 = this.m21;
	const m13 = this.m31;
	const m20 = this.m02;
	const m21 = this.m12;
	const m22 = this.m22;
	const m23 = this.m32;
	const m30 = this.m03;
	const m31 = this.m13;
	const m32 = this.m23;
	const m33 = this.m33;
	dest.m00 = m00;
	dest.m01 = m01;
	dest.m02 = m02;
	dest.m03 = m03;
	dest.m10 = m10;
	dest.m11 = m11;
	dest.m12 = m12;
	dest.m13 = m13;
	dest.m20 = m20;
	dest.m21 = m21;
	dest.m22 = m22;
	dest.m23 = m23;
	dest.m30 = m30;
	dest.m31 = m31;
	dest.m32 = m32;
	dest.m33 = m33;
	return dest;
};

Matrices.Matrix4.prototype.translate = function(vector, dest){
	if(dest === undefined){
		dest = this;
	}
	dest.m30 += this.m00 * vector.x + this.m10 * vector.y + this.m20 * vector.z;
	dest.m31 += this.m01 * vector.x + this.m11 * vector.y + this.m21 * vector.z;
	dest.m32 += this.m02 * vector.x + this.m12 * vector.y + this.m22 * vector.z;
	dest.m33 += this.m03 * vector.x + this.m13 * vector.y + this.m23 * vector.z;
	return dest;
};

Matrices.Matrix4.prototype.scale = function(vector, dest){
	if(dest === undefined){
		dest = this;
	}
	dest.m00 = this.m00 * vector.x;
	dest.m01 = this.m01 * vector.x;
	dest.m02 = this.m02 * vector.x;
	dest.m03 = this.m03 * vector.x;
	dest.m10 = this.m10 * vector.y;
	dest.m11 = this.m11 * vector.y;
	dest.m12 = this.m12 * vector.y;
	dest.m13 = this.m13 * vector.y;
	dest.m20 = this.m20 * vector.z;
	dest.m21 = this.m21 * vector.z;
	dest.m22 = this.m22 * vector.z;
	dest.m23 = this.m23 * vector.z;
	return dest;
};

Matrices.Matrix4.prototype.rotate = function(angle, axis, dest){
	if(dest === undefined){
		dest = this;
	}
	const c = Math.cos(toRadians(angle));
	const s = Math.sin(toRadians(angle));
	const oneminusc = 1 - c;
	const xy = axis.x * axis.y;
	const yz = axis.y * axis.z;
	const xz = axis.x * axis.z;
	const xs = axis.x * s;
	const ys = axis.y * s;
	const zs = axis.z * s;
	const f00 = axis.x * axis.x * oneminusc + c;
	const f01 = xy * oneminusc + zs;
	const f02 = xz * oneminusc - ys;
	const f10 = xy * oneminusc - zs;
	const f11 = axis.y * axis.y * oneminusc + c;
	const f12 = yz * oneminusc + xs;
	const f20 = xz * oneminusc + ys;
	const f21 = yz * oneminusc - xs;
	const f22 = axis.z * axis.z * oneminusc + c;
	const t00 = this.m00 * f00 + this.m10 * f01 + this.m20 * f02;
	const t01 = this.m01 * f00 + this.m11 * f01 + this.m21 * f02;
	const t02 = this.m02 * f00 + this.m12 * f01 + this.m22 * f02;
	const t03 = this.m03 * f00 + this.m13 * f01 + this.m23 * f02;
	const t10 = this.m00 * f10 + this.m10 * f11 + this.m20 * f12;
	const t11 = this.m01 * f10 + this.m11 * f11 + this.m21 * f12;
	const t12 = this.m02 * f10 + this.m12 * f11 + this.m22 * f12;
	const t13 = this.m03 * f10 + this.m13 * f11 + this.m23 * f12;
	dest.m20 = this.m00 * f20 + this.m10 * f21 + this.m20 * f22;
	dest.m21 = this.m01 * f20 + this.m11 * f21 + this.m21 * f22;
	dest.m22 = this.m02 * f20 + this.m12 * f21 + this.m22 * f22;
	dest.m23 = this.m03 * f20 + this.m13 * f21 + this.m23 * f22;
	dest.m00 = t00;
	dest.m01 = t01;
	dest.m02 = t02;
	dest.m03 = t03;
	dest.m10 = t10;
	dest.m11 = t11;
	dest.m12 = t12;
	dest.m13 = t13;
	return dest;
};

Matrices.Matrix4.prototype.determinant = function(){
	let f = this.m00 * ((this.m11 * this.m22 * this.m33 + this.m12 * this.m23 * this.m31 + this.m13 * this.m21 * this.m32) - this.m13 * this.m22 * this.m31 - this.m11 * this.m23 * this.m32 - this.m12 * this.m21 * this.m33);
	f -= this.m01 * ((this.m10 * this.m22 * this.m33 + this.m12 * this.m23 * this.m30 + this.m13 * this.m20 * this.m32) - this.m13 * this.m22 * this.m30 - this.m10 * this.m23 * this.m32 - this.m12 * this.m20 * this.m33);
	f += this.m02 * ((this.m10 * this.m21 * this.m33 + this.m11 * this.m23 * this.m30 + this.m13 * this.m20 * this.m31) - this.m13 * this.m21 * this.m30 - this.m10 * this.m23 * this.m31 - this.m11 * this.m20 * this.m33);
	f -= this.m03 * ((this.m10 * this.m21 * this.m32 + this.m11 * this.m22 * this.m30 + this.m12 * this.m20 * this.m31) - this.m12 * this.m21 * this.m30 - this.m10 * this.m22 * this.m31 - this.m11 * this.m20 * this.m32);
	return f;
};

Matrices.Matrix4.prototype.invert = function(dest){
	if(dest === undefined){
		dest = this;
	}
	const determinant = this.determinant();
	if(determinant !== 0){
		const determinant_inv = 1 / determinant;
		const t00 =  determinant3x3(this.m11, this.m12, this.m13, this.m21, this.m22, this.m23, this.m31, this.m32, this.m33);
		const t01 = -determinant3x3(this.m10, this.m12, this.m13, this.m20, this.m22, this.m23, this.m30, this.m32, this.m33);
		const t02 =  determinant3x3(this.m10, this.m11, this.m13, this.m20, this.m21, this.m23, this.m30, this.m31, this.m33);
		const t03 = -determinant3x3(this.m10, this.m11, this.m12, this.m20, this.m21, this.m22, this.m30, this.m31, this.m32);
		const t10 = -determinant3x3(this.m01, this.m02, this.m03, this.m21, this.m22, this.m23, this.m31, this.m32, this.m33);
		const t11 =  determinant3x3(this.m00, this.m02, this.m03, this.m20, this.m22, this.m23, this.m30, this.m32, this.m33);
		const t12 = -determinant3x3(this.m00, this.m01, this.m03, this.m20, this.m21, this.m23, this.m30, this.m31, this.m33);
		const t13 =  determinant3x3(this.m00, this.m01, this.m02, this.m20, this.m21, this.m22, this.m30, this.m31, this.m32);
		const t20 =  determinant3x3(this.m01, this.m02, this.m03, this.m11, this.m12, this.m13, this.m31, this.m32, this.m33);
		const t21 = -determinant3x3(this.m00, this.m02, this.m03, this.m10, this.m12, this.m13, this.m30, this.m32, this.m33);
		const t22 =  determinant3x3(this.m00, this.m01, this.m03, this.m10, this.m11, this.m13, this.m30, this.m31, this.m33);
		const t23 = -determinant3x3(this.m00, this.m01, this.m02, this.m10, this.m11, this.m12, this.m30, this.m31, this.m32);
		const t30 = -determinant3x3(this.m01, this.m02, this.m03, this.m11, this.m12, this.m13, this.m21, this.m22, this.m23);
		const t31 =  determinant3x3(this.m00, this.m02, this.m03, this.m10, this.m12, this.m13, this.m20, this.m22, this.m23);
		const t32 = -determinant3x3(this.m00, this.m01, this.m03, this.m10, this.m11, this.m13, this.m20, this.m21, this.m23);
		const t33 =  determinant3x3(this.m00, this.m01, this.m02, this.m10, this.m11, this.m12, this.m20, this.m21, this.m22);
		dest.m00 = t00 * determinant_inv;
		dest.m11 = t11 * determinant_inv;
		dest.m22 = t22 * determinant_inv;
		dest.m33 = t33 * determinant_inv;
		dest.m01 = t10 * determinant_inv;
		dest.m10 = t01 * determinant_inv;
		dest.m20 = t02 * determinant_inv;
		dest.m02 = t20 * determinant_inv;
		dest.m12 = t21 * determinant_inv;
		dest.m21 = t12 * determinant_inv;
		dest.m03 = t30 * determinant_inv;
		dest.m30 = t03 * determinant_inv;
		dest.m13 = t31 * determinant_inv;
		dest.m31 = t13 * determinant_inv;
		dest.m32 = t23 * determinant_inv;
		dest.m23 = t32 * determinant_inv;
		return dest;
	}
	else {
		throw "Can't invert this matrix";
	}
};

Matrices.Matrix4.prototype.negate = function(dest){
	if(dest === undefined){
		dest = this;
	}
	dest.m00 = -this.m00;
	dest.m01 = -this.m01;
	dest.m02 = -this.m02;
	dest.m03 = -this.m03;
	dest.m10 = -this.m10;
	dest.m11 = -this.m11;
	dest.m12 = -this.m12;
	dest.m13 = -this.m13;
	dest.m20 = -this.m20;
	dest.m21 = -this.m21;
	dest.m22 = -this.m22;
	dest.m23 = -this.m23;
	dest.m30 = -this.m30;
	dest.m31 = -this.m31;
	dest.m32 = -this.m32;
	dest.m33 = -this.m33;
	return dest;
};