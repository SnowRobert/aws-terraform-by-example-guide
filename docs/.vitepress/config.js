module.exports = {
    lang: 'en-US',
    title: 'AWS and Terraform by example',
    description: 'AWS and Terraform by example',
    lastUpdated: true,
    markdown: {
        lineNumbers: false
    },
    themeConfig: {
        repo: 'musonza/aws-terraform-by-example-guide',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        lastUpdatedText: 'Last Updated',

        socialLinks: [
            { icon: 'github', link: 'https://github.com/musonza/aws-terraform-by-example-guide' },
            { icon: 'linkedin', link: 'https://linkedin.com/in/srfullstackdeveloper' },
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Tinashe Musonza'
        },

        sidebar: {
            '/guide/': getGuideSidebar(),
            '/': getGuideSidebar()
        },

        head: [
            [
              'script',
              { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-1XGVBET7W0' }
            ],
            [
              'script',
              {},
              "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-1XGVBET7W0');"
            ]
        ],
    }
}

function getGuideSidebar() {
    return [
        {
            text: 'Guide',
            collapsible: false,
            items: [
                { text: 'About this guide', link: '/guide/' },
                { text: 'Requirements', link: '/guide/2-requirements' },
                { text: 'Project setup', link: '/guide/3-project-setup' },
                { text: 'Chatbot creation', link: '/guide/4-chatbot-creation' },
                { text: 'Chatbot code hooks', link: '/guide/5-chatbot-code-hooks' },
                { text: 'Data storage', link: '/guide/6-data-storage' },
                { text: 'Chatbot Web Interface', link: '/guide/7-chatbot-web-interface' },
                { text: 'Template files', link: '/guide/8-template-files-refactor'},
                { text: 'Introducing Cloud9', link: '/guide/9-introducing-cloud9'},
                { text: 'Separation of concerns',  link: '/guide/10-separation-of-concerns'},
                { text: 'Authentication',  link: '/guide/11-authentication'}
            ]
        }
    ]
}
