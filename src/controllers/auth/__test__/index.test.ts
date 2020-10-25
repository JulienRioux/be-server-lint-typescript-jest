import request from "supertest";
import { app } from "../../../app";

describe("Test Auth Controller", () => {
  it("Request /auth should return Auth!", async () => {
    const result = await request(app).get("/auth").send();

    expect(result.status).toBe(200);
    expect(result.body.data).toBe("Authenticating");
  });
});
