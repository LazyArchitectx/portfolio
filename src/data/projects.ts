// src/data/projects.ts
export type Category = 'Evaluation' | 'Agentic' | 'Compliance' | 'Monitoring';

export interface Project {
  name: string;
  repo: string;          // GitHub URL
  category: Category;
  summary: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    name: 'rubric-reward-modeling',
    repo: 'https://github.com/LazyArchitectx/rubric-reward-modeling',
    category: 'Evaluation',
    summary: 'LLM-as-judge scorer with a 5-dimension rubric and safety hard gate.',
    highlights: ['15 passing tests', 'GitHub Actions CI'],
  },
  {
    name: 'agentic-benchmark-harness',
    repo: 'https://github.com/LazyArchitectx/agentic-benchmark-harness',
    category: 'Agentic',
    summary: 'MCP implementation with a deterministic mock tool sandbox and 4-domain YAML task suite.',
    highlights: ['18 passing tests', 'Safety-boundary failure demo'],
  },
  {
    name: 'continuous-compliance-evidence',
    repo: 'https://github.com/LazyArchitectx/continuous-compliance-evidence',
    category: 'Compliance',
    summary: 'Automated evidence collection and audit-trail generation across frameworks.',
    highlights: ['Multi-framework', '100% automated'],
  },
  {
    name: 'compliance-as-code-gating',
    repo: 'https://github.com/LazyArchitectx/compliance-as-code-gating',
    category: 'Compliance',
    summary: 'Policy enforcement as code, wired into CI/CD with declarative rules.',
    highlights: ['Real-time enforcement'],
  },
  {
    name: 'drift-monitoring-dynamic-schema',
    repo: 'https://github.com/LazyArchitectx/drift-monitoring-dynamic-schema',
    category: 'Monitoring',
    summary: 'Real-time drift detection with schema-evolution tracking.',
    highlights: ['Full-stack coverage'],
  },
];