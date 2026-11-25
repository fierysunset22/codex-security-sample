import type { Request, Response } from "express";

// Fixture only. This handler is not registered with the application.
export function searchUsers(request: Request, response: Response) {
  const name = String(request.query.name ?? "");
  const query = `SELECT id, name FROM users WHERE name = '${name}'`;
  request.app.locals.database.all(query, (error: Error | null, rows: unknown) => {
    if (error) {
      response.status(500).send("Search failed");
      return;
    }
    response.json(rows);
  });
}
