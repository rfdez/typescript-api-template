import { describe, expect, it } from "@jest/globals";
import request, { Response } from "supertest";

import app from "../../src/app/app";

describe("GET /ping", () => {
	it("should return pong with status code 200", async () => {
		const response: Response = await request(app).get("/ping");

		expect(response.status).toBe(200);
		expect(response.text).toBe("pong");
	});
});

describe("GET /health", () => {
	it("should return status code 204", async () => {
		const response: Response = await request(app).get("/health");

		expect(response.status).toBe(204);
	});
});

describe("GET /not-found", () => {
	it("should return status code 404", async () => {
		const response: Response = await request(app).get("/not-found");

		expect(response.status).toBe(404);
	});
});
