export const PRODUCT_ROLES = ['Policy owner', 'Manager reviewer', 'Staff user', 'Risk approver'];

export const PRODUCT_PERSONAS = ['Policy owner', 'Manager reviewer', 'Staff user', 'Risk approver', 'Training facilitator', 'Implementation pod lead'];

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

export const PRODUCT_KPIS = ['Use cases inventoried', 'High-risk use cases governed', 'Staff acknowledgement coverage', 'Prohibited-use blocks', 'Human-review coverage', 'Policy refresh readiness'];

export const PRODUCT_WORKFLOWS = [
  'Use-case inventory schema',
  'Data-risk classifier',
  'Prohibited-use gate',
  'Staff checklist export',
];

export const PRODUCT_ONBOARDING = ['Inventory AI use cases', 'Classify data and risk levels', 'Define allowed/prohibited uses', 'Approve human-review rules', 'Export staff checklist', 'Collect acknowledgement plan'];

export const PRODUCT_GUARDS = [
  'Block prohibited use cases',
  'Require human review for sensitive decisions',
  'Flag missing disclosure language',
];

export const PRODUCT_EXPANSION = ['Department policy addenda', 'Quarterly AI use recertification', 'Staff training campaign', 'Vendor-risk review workflow'];

export const PRODUCT_DATA_MODEL = ['AI use case', 'Data class', 'Allowed use', 'Prohibited use', 'Human review rule', 'Staff acknowledgement'];

export const PRODUCT_SUCCESS_SIGNALS = ['Prohibited uses are explicit', 'High-risk use cases require approval', 'Staff checklist is owner-approved', 'Data classes map to review rules'];

export function createProductSaasBlueprint(config, domain) {
  return {
    product: config.title,
    northStar: config.metric,
    roles: PRODUCT_ROLES,
    personas: PRODUCT_PERSONAS,
    integrations: PRODUCT_INTEGRATIONS,
    analytics: PRODUCT_ANALYTICS,
    kpis: PRODUCT_KPIS,
    workflows: PRODUCT_WORKFLOWS,
    onboarding: PRODUCT_ONBOARDING,
    guards: PRODUCT_GUARDS,
    expansion: PRODUCT_EXPANSION,
    dataModel: PRODUCT_DATA_MODEL,
    successSignals: PRODUCT_SUCCESS_SIGNALS,
    modules: config.modules,
    artifacts: domain.artifacts
  };
}
