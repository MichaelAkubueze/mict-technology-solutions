import { MICT_MARKETING_AGENT_INSTRUCTIONS } from './instructions';

export type AgentInput = {
  task: string;
  campaignContext?: Record<string, unknown>;
};

/**
 * Framework-agnostic prompt payload. Wire this into the OpenAI Agents SDK in the
 * MICT application runtime and expose only approved tools.
 */
export function buildAgentPrompt(input: AgentInput): string {
  return [
    MICT_MARKETING_AGENT_INSTRUCTIONS.trim(),
    '',
    'CURRENT TASK',
    input.task,
    '',
    'CAMPAIGN CONTEXT',
    JSON.stringify(input.campaignContext ?? {}, null, 2),
  ].join('\n');
}
