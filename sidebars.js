/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-nocheck

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'introduction',
    {
      type: 'category',
      label: 'Tournament',
      collapsed: true,
      items: [
        'tournament/info',
        'tournament/entries',
        'tournament/divisions',
        'tournament/seedChart',
        'tournament/judges',
      ],
    },
    'clubs',
    'teams',
    'schedule',
    'scoring',
    'ringsideDisplay',
    'placements',
    'forms',
    'faq',
    'releaseNotes',
    'issues',
  ],
  tutorialSidebar: [
    'tutorial/info',
    'tutorial/entries',
    'tutorial/judges',
    'tutorial/divisions',
    'tutorial/seedChart',
    'tutorial/createSchedule',
  ],
};

module.exports = sidebars;
