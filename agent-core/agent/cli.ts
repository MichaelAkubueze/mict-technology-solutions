async function main(): Promise<void> {
  try {
    process.loadEnvFile(".env.local");

    if (!process.env.OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY is not configured in .env.local");
    }

    const task = process.argv.slice(2).join(" ").trim();

    if (!task) {
      console.error('Usage: pnpm run agent -- "Create a campaign plan"');
      process.exit(1);
    }

    const { runMarketingAgent } = await import("./marketing-agent");
    const output = await runMarketingAgent(task);

    console.log(output);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Marketing agent failed: ${message}`);
    process.exit(1);
  }
}

void main();
