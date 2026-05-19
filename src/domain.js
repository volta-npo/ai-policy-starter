export const domain = {
    "kind": "policy-builder",
    "title": "AI Policy Starter",
    "purpose": "A purpose-built policy builder interface for a tiny ai-use policy generator for small businesses adopting ai tools responsibly.",
    "inputTitle": "Product-specific inputs",
    "previewTitle": "Generated working outputs",
    "tableTitle": "AI use cases",
    "metricLabels": [
        "Policy Coverage",
        "Data Risk",
        "Human Review Coverage"
    ],
    "fields": [
        {
            "id": "organization-client",
            "label": "Organization / client",
            "type": "text",
            "sample": "BrightPath Tutoring Studio",
            "placeholder": "Enter organization / client"
        },
        {
            "id": "primary-goal",
            "label": "Primary goal",
            "type": "text",
            "sample": "AI workflows covered by written policy",
            "placeholder": "Enter primary goal"
        },
        {
            "id": "owner-reviewer",
            "label": "Owner / reviewer",
            "type": "text",
            "sample": "Volta project lead",
            "placeholder": "Enter owner / reviewer"
        },
        {
            "id": "evidence-source",
            "label": "Evidence source",
            "type": "text",
            "sample": "Owner interview + public audit",
            "placeholder": "Enter evidence source"
        },
        {
            "id": "input-asset",
            "label": "Input asset",
            "type": "text",
            "sample": "Use cases inventoried",
            "placeholder": "Enter input asset"
        },
        {
            "id": "output-format",
            "label": "Output format",
            "type": "text",
            "sample": "AI policy",
            "placeholder": "Enter output format"
        },
        {
            "id": "review-threshold",
            "label": "Review threshold",
            "type": "number",
            "sample": 85,
            "placeholder": "Enter review threshold"
        },
        {
            "id": "approved-channel",
            "label": "Approved channel",
            "type": "text",
            "sample": "Owner handoff packet",
            "placeholder": "Enter approved channel"
        }
    ],
    "rows": [
        "Use cases inventoried",
        "Data classes assigned",
        "Allowed rules written",
        "Prohibited rules written",
        "Customer-facing disclosure set",
        "Human review rules set",
        "Owner acknowledgement captured",
        "One-page policy exported"
    ],
    "artifacts": [
        "AI policy",
        "Staff checklist",
        "Rules JSON"
    ],
    "checks": [
        "Use case owner required",
        "Private data rules required",
        "Prohibited-use acknowledgement required"
    ],
    "sampleClient": "BrightPath Tutoring Studio"
};
//# sourceMappingURL=domain.js.map