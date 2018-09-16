const Matrices = {
	determinant3x3 : function(t00, t01, t02, t10, t11, t12, t20, t21, t22){
		return t00 * (t11 * t22 - t12 * t21) + t01 * (t12 * t20 - t10 * t22) + t02 * (t10 * t21 - t11 * t20);
	},
	createProjectionMatrix : function(fov, nearPlane, farPlane, width, height){
		const aspectRatio = width / height;
		const yScale = aspectRatio * (1 / Math.tan(toRadians(fov / 2)));
		const xScale = yScale / aspectRatio;
		const frustumLength = farPlane - nearPlane;
		const matrix = new Matrices.Matrix4();
		matrix.m00 = xScale;
		matrix.m11 = yScale;
		matrix.m22 = -((farPlane + nearPlane) / frustumLength);
		matrix.m23 = -1;
		matrix.m32 = -((2 * farPlane * nearPlane) / frustumLength);
		return matrix;
	},
	createViewMatrix : function(x, y, z, pitch, yaw, roll){
		const matrix = new Matrices.Matrix4();
		matrix.setIdentity();
		if(pitch){
			matrix.rotate(pitch, Vectors.AXIS_X);
		}
		if(yaw){
			matrix.rotate(yaw, Vectors.AXIS_Y);
		}
		if(roll){
			matrix.rotate(roll, Vectors.AXIS_Z);
		}
		matrix.translate(new Vectors.Vector3(-x, -y, -z));
		return matrix;
	},
	createCameraMatrix : function(fov, nearPlane, farPlane, width, height, x, y, z, pitch, yaw, roll){
		return Matrices.createProjectionMatrix(fov, nearPlane, farPlane, width, height).multiply(Matrices.createViewMatrix(x, y, z, pitch, yaw, roll));
	}
};