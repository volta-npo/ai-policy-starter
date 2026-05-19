export const PRODUCT_ROLES = [
    'Policy owner',
    'Manager reviewer',
    'Staff user',
    'Risk approver',
];
export const PRODUCT_INTEGRATIONS = [
    'AI use-case inventory',
    'Staff checklist export',
    'Policy one-pager',
    'Prohibited-use register',
];
export const PRODUCT_ANALYTICS = [
    'Use-case risk distribution',
    'Training acknowledgement coverage',
    'Human-review coverage',
    'Prohibited-use exceptions',
];
export const PRODUCT_WORKFLOWS = [
    'Use-case inventory schema',
    'Data-risk classifier',
    'Prohibited-use gate',
    'Staff checklist export',
];
export const PRODUCT_GUARDS = [
    'Block prohibited use cases',
    'Require human review for sensitive decisions',
    'Flag missing disclosure language',
];
export function createProductSaasBlueprint(config, domain) {
    return {
        product: config.title,
        northStar: config.metric,
        roles: PRODUCT_ROLES,
        integrations: PRODUCT_INTEGRATIONS,
        analytics: PRODUCT_ANALYTICS,
        workflows: PRODUCT_WORKFLOWS,
        guards: PRODUCT_GUARDS,
        modules: config.modules,
        artifacts: domain.artifacts
    };
}
//# sourceMappingURL=saas-blueprint.js.map