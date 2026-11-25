import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { Request, Response } from "express";

// Fixture only. This handler is not registered with the application.
export async function readDocument(request: Request, response: Response) {
  const filename = String(request.query.filename ?? "");
  const content = await readFile(join("documents", filename), "utf8");
  response.type("text/plain").send(content);
}
