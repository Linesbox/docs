module.exports = {
    title: 'Linesbox Documentation',
    description: 'Everything you need to know about Linesbox.',
    themeConfig: {
        logo: '/vuepress-logo.png',
        lastUpdated: 'Last updated',
        repo: 'linesbox/docs',
        docsDir: 'docs',
        docsBranch: 'main',
        // docsDir: 'docs',
        editLinks: true,
        sidebarDepth: 3,
        algolia: {
            apiKey: '15d199d84b17cd3ef558c47acead7bd8',
            indexName: 'linesbox',
            appId: 'E1RRNMYU8X',
        },
        editLinkText: 'Found a typo? An error? Edit this page',
        nav: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'Documentation',
                items: [
                    {
                        text: 'Introduction',
                        items: [
                            {
                                text: 'Getting started',
                                link: '/documentation/introduction'
                            },
                        ],
                    },
                    {
                        text: 'Domains',
                        items: [
                            {
                                text: 'Recruit',
                                link: '/documentation/recruit/applicant-tracking-system'
                            },
                            {
                                text: 'Manage',
                                link: '/documentation/manage/overview'
                            },
                            {
                                text: 'Operate',
                                link: '/documentation/operate/project-management'
                            },
                            {
                                text: 'Communicate',
                                link: '/documentation/communicate/recent-ships'
                            },
                            {
                                text: 'Grow',
                                link: '/documentation/grow/e-coffee'
                            }
                        ]
                    }
                ]
            },
            {
                text: 'Links',
                items: [
                    {
                        text: 'Marketing site',
                        link: 'https://linesbox.com'
                    },
                    {
                        text: 'Sign In',
                        link: 'https://app.linesbox.com/login'
                    },
                    {
                        text: 'Sign Up',
                        link: 'https://app.linesbox.com/register'
                    },
                    {
                        text: 'Email',
                        link: 'mailto:hello@linesbox.com'
                    }
                ]
            },
        ],
        sidebar: {
            '/documentation/': getDocumentationSidebar(),
        }
    },

    plugins: [
        '@vuepress/active-header-links',
        '@vuepress/medium-zoom',
    ],
}
function getDocumentationSidebar() {
    return [
        {
            title: '👋 Linesbox',
            collapsable: false,
            children: [
                'introduction',
                'setup-guide',
                'linesbox-beta',
            ]
        },
        {
            title: '👨‍💻 Recruit',
            collapsable: false,
            children: [
                ['recruit/applicant-tracking-system.md', 'Applicant tracking system'],
            ]
        },
        {
            title: '👩‍🏫 Manage',
            collapsable: false,
            children: [
                ['manage/employee-management', 'Employee management'],
                ['manage/team-management', 'Team management'],
                ['manage/company-management', 'Company management'],
                ['manage/group-management', 'Group management'],
            ]
        },
        {
            title: '🤖 Operate',
            collapsable: false,
            children: [
                ['operate/project-management', 'Project management'],
                ['operate/time-tracking', 'Time tracking'],
                ['operate/expenses', 'Expenses'],
                ['operate/hardware', 'Hardware management'],
                ['operate/software', 'Software management'],
            ]
        },
        {
            title: '🛰 Communicate',
            collapsable: false,
            children: [
                ['communicate/recent-ships', 'Recent ships'],
                ['communicate/worklogs', 'Work logs'],
                ['communicate/get-to-know-your-colleagues', 'Get to know your colleagues'],
                ['communicate/wiki', 'Wikis'],
            ]
        },
        {
            title: '🧚‍♀️ Grow',
            collapsable: false,
            children: [
                ['grow/e-coffee', 'e-Coffees'],
                ['grow/one-on-ones', '1-on-1’s'],
                ['grow/rate-your-manager', 'Rate your manager'],
                ['grow/skills', 'Skills'],
            ]
        }
    ]
}
