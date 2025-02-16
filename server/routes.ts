import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const messageData = insertContactMessageSchema.parse(req.body);
      // In real app, would store in database and send email notification
      res.json({ success: true, message: "Message received successfully" });
    } catch (error) {
      res.status(400).json({ success: false, message: "Invalid form data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
