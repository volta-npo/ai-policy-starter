export const config = {
    "number": 40,
    "slug": "ai-policy-starter",
    "title": "AI Policy Starter",
    "category": "AI & Automation",
    "tagline": "A tiny AI-use policy generator for small businesses adopting AI tools responsibly.",
    "persona": "Students advising owners on AI-assisted content, chat, and workflows.",
    "gap": "AI governance advice targets corporations. Small businesses still need simple boundaries.",
    "niche": "Responsible AI adoption for nontechnical teams.",
    "metric": "AI workflows covered by written policy",
    "modules": [
        "Use-case inventory",
        "Allowed/prohibited rules",
        "Human review checklist",
        "Customer data guidance"
    ],
    "theme": {
        "accent": "#7c3aed",
        "accent2": "#c4b5fd",
        "emoji": "\u26a1",
        "metricLabel": "Automation safety",
        "workflow": [
            "Define workflow boundary",
            "Identify data and failure risks",
            "Require human review",
            "Export safe implementation plan"
        ],
        "privacy": "No external AI calls are made. Treat customer data, credentials, payments, and public posting as high risk."
    },
    "statuses": [
        "not-started",
        "blocked",
        "in-progress",
        "ready",
        "approved"
    ],
    "criteria": [
        {
            "id": "use-case-inventory",
            "label": "Use-case inventory",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify use-case inventory with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "allowed-prohibited-rules",
            "label": "Allowed/prohibited rules",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify allowed/prohibited rules with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "human-review-checklist",
            "label": "Human review checklist",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify human review checklist with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "customer-data-guidance",
            "label": "Customer data guidance",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify customer data guidance with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "evidence-quality",
            "label": "Evidence quality",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
        },
        {
            "id": "owner-handoff",
            "label": "Owner handoff",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Make the output understandable and maintainable by a nontechnical owner."
        },
        {
            "id": "mission-alignment",
            "label": "Mission alignment",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Show how this advances digital equity, student growth, or pro bono delivery."
        },
        {
            "id": "qa-safety",
            "label": "QA and safety",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
        }
    ],
    "templates": {
        "actions": [
            "Run a real Volta scenario for AI Policy Starter and capture baseline evidence.",
            "Complete the use-case inventory workflow with owner-safe notes.",
            "Resolve all blocked rubric items and add evidence for every ready item.",
            "Export the handoff packet and review it with a mentor before client use."
        ]
    },
    "sample": {
        "clientName": "BrightPath Tutoring Studio",
        "chapter": "El Paso",
        "studentLead": "Volta Student Lead",
        "notes": "Responsible automation project to reduce admin time without exposing student data. AI Policy Starter sample.",
        "evidencePrefix": "AI Policy Starter",
        "evidence": [
            "Discovery call notes captured with owner confirmation.",
            "Public digital footprint reviewed and summarized.",
            "Mentor QA comments attached before handoff."
        ]
    }
};
//# sourceMappingURL=config.js.map