/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	testEnvironment: "node",
	transform: {
		"^.+\\.(t|j)s$": "@swc/jest",
	},
};
