import type { Request, Response } from "express";

// Fixture only. This handler is not registered with the application.
export function showComment(request: Request, response: Response) {
  const comment = String(request.query.comment ?? "");
  response.send(`<main><h1>Comment</h1><p>${comment}</p></main>`);
}
