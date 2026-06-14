import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini API client safely and lazily
  let aiClient: GoogleGenAI | null = null;
  function getGeminiClient(): GoogleGenAI {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('GEMINI_API_KEY environment variable is required but missing.');
      }
      aiClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
    }
    return aiClient;
  }

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // Marketing Copy Generator using Gemini-3.5-flash
  app.post('/api/gemini/generate-marketing-copy', async (req, res) => {
    try {
      const { phaseId, concept, formatType, customNote } = req.body;

      if (!phaseId) {
        return res.status(400).json({ error: 'Missing phaseId parameter.' });
      }

      const client = getGeminiClient();

      // System Instructions based on campaign guidelines
      const systemInstruction = 
        `You are a brilliant, warm minimalist creative copywriter working on an prestigious IMC (Integrated Marketing Communications) campaign for a high-end soy wax scented candle brand in Ho Chi Minh City (TP.HCM), Vietnam.
        
        The overall campaign is titled "Rest Is Not A Reward" (Nghỉ ngơi không phải phần thưởng).
        - Core Audience: Young women aged 22-32 in Saigon (freelancers, office workers), income 8-20M VND, stressed, overworking, suffering from hustle culture guilt.
        - Strategic Tone: Sophisticated, quiet, poetic, comforting, genuine, warm minimalism. Strictly Vietnamese (native, Sài Gòn modern style). Avoid high-pressure sales pitch tactics or dry academic jargon. Use cozy, gentle typography and visual layout cues in text.
        
        You write copy according to the selected Campaign Phase and format request.`;

      const prompt = 
        `Write content details based on the following specific request:
        - Campaign Phase: ${phaseId.toUpperCase()}
        - Content Format: ${formatType} (e.g. "TikTok Video Script", "Instagram Carousel Draft", "Poster Typography & Core Visual Pitch", "PR Pitch to Humans of Saigon", "Rest Ritual Card Text")
        - Campaign Context / Topic Idea: ${concept || 'General campaign theme "Rest Is Not A Reward"'}
        - Custom Instructions: ${customNote || 'Make it beautiful, evocative, and deeply touching.'}
        
        Please generate the output in a very polished Markdown format. Make sure it is deeply structured, has clear visual directions/cues (for designers or videographers), and copy that can be directly used. Use natural, elegant Saigon Vietnamese.`;

      const response = await client.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.85,
        }
      });

      const text = response.text;
      res.json({ success: true, text });
    } catch (error: any) {
      console.error('Error in/api/gemini/generate-marketing-copy:', error);
      res.status(500).json({ 
        success: false, 
        error: error.message || 'Failed to generate copy using Gemini API. Make sure GEMINI_API_KEY is configured.' 
      });
    }
  });

  // Integrate Vite dev server middleware in development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Express server running on http://0.0.0.0:${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
export default {};
