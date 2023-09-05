/** @type {import('jest').Config} */
module.exports = {
	testEnvironment: "node",
	transform: {
		"^.+\\.(t|j)s$": "@swc/jest",
	},
};
