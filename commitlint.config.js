module.exports = {
  // We still extend the base convention
  extends: ['@commitlint/config-conventional'],

  rules: {
    //HEADER LENGTH: Must be between 10 and 72 characters
    'header-min-length': [2, 'always', 10],
    'header-max-length': [2, 'always', 72],

    // TYPE ENUM: Restrict allowed types to a very small set
    // Level 2 (error), always, list of allowed types
    'type-enum': [2, 'always', ['feat', 'fix', 'chore', 'docs', 'refactor', 'style']],

    //  BODY REQUIREMENT: Require a body for new features (feat) and breaking changes
    // Level 2 (error), always, required
    'body-max-line-length': [2, 'always', 72],
    'body-leading-blank': [2, 'always'],

    //  SUBJECT CHECK: Ensure subject starts with a lowercase letter and does not end with a period
    'subject-case': [2, 'always', 'lower-case'],
    'subject-full-stop': [2, 'never', '.'],

    // FOOTER REQUIREMENT: Require a blank line before the footer (e.g., for BREAKING CHANGE)
    'footer-leading-blank': [2, 'always'],
  },
};
