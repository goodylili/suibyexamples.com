const sidebar = [
    {
        text: "Introduction",
        items: [
            {text: "What is Movement?", link: "/introduction/what-is-movement"},
            {text: "Why Movement?", link: "/introduction/why-movement"},
            {text: "Key Features", link: "/introduction/features"},
        ],
    },
    {
        text: "Core Concepts",
        items: [
            {text: "Movement Architecture", link: "/core-concepts/architecture"},
            {text: "Move Virtual Machine (MVM)", link: "/core-concepts/mvm"},
            {text: "The Movement Framework", link: "/core-concepts/the-movement-framework"},
        ],
    },
    {
        text: "Getting Started",
        items: [
            {text: "Installing Movement CLI", link: "/getting-started/cli-install"},
            {text: "Setting Up Development Environment", link: "/getting-started/setup"},
            {text: "Connecting to a Network", link: "/getting-started/network-connection"},
            {text: "Your First Smart Contract", link: "/getting-started/first-contract"},
        ],
    },

    {
        "text": "The Move Reference",
        "collapsed": true,
        "items": [
            {"text": "Creating a Move Project", "link": "/move-basics/creating-a-move-project"},
            {"text": "Compiling Your Move Projects", "link": "/move-basics/compiling"},
            {"text": "Testing Your Move Projects", "link": "/move-basics/testing"},
            {"text": "Debugging Your Move Projects", "link": "/move-basics/debugging"},
            {"text": "Move Primitive Types", "link": "/move-basics/variables-and-types"},
            {"text": "Composite & Complex Types", "link": "/move-basics/composite-complex-types"},
            {"text": "Control Flow", "link": "/move-basics/control-flow"},
            {"text": "Structs & Abilities", "link": "/move-basics/structs-abilities"},
            {"text": "Functions", "link": "/move-basics/modules-functions"},
            {"text": "Error Handling", "link": "/move-basics/error-handling"},
            {"text": "Scripts", "link": "/move-basics/scripts"},
            {"text": "Addressable Storage", "link": "/move-basics/addressable-storage"},
            {"text": "The Aptos Move Object Standard", "link": "/move-basics/the-aptos-move-object-standard"},
            {
                "text": "The Aptos Move Digital Asset Standard",
                "link": "/move-basics/the-aptos-move-digital-asset-standard"
            },
            {
                "text": "The Aptos Move Fungible Asset Standard",
                "link": "/move-basics/the-aptos-move-fungible-asset-standard"
            },
            {"text": "Advanced Move", "link": "/move-basics/advanced-move"}
        ]
    },
    {
        text: "Smart Contract Development",
        collapsed: true,
        items: [
            {text: "Writing Smart Contracts", link: "/smart-contracts/writing"},
            {text: "Ownership & Access Control", link: "/smart-contracts/ownership"},
            {text: "Deployment Best Practices", link: "/smart-contracts/deployment"},
        ],
    },
    {
        text: "Advanced Features",
        collapsed: true,
        items: [
            {text: "Upgradability & Package Management", link: "/advanced/upgradability"},
            {text: "Dynamic Fields & Object Capabilities", link: "/advanced/dynamic-fields"},
            {text: "Cryptographic Operations", link: "/advanced/crypto-operations"},
        ],
    },
    {
        text: "Interoperability",
        collapsed: true,
        items: [
            {text: "Cross-Chain Development", link: "/interoperability/cross-chain"},
            {text: "Bridges & Messaging Protocols", link: "/interoperability/bridges"},
        ],
    },
    {
        text: "Testing & Debugging",
        collapsed: true,
        items: [
            {text: "Unit Testing", link: "/testing/unit-testing"},
            {text: "End-to-End Testing", link: "/testing/e2e-testing"},
            {text: "Debugging Techniques", link: "/testing/debugging"},
        ],
    },
    {
        text: "Real-World Examples",
        collapsed: true,
        items: [
            {text: "Building a Token Standard", link: "/examples/token-standard"},
            {text: "NFT Marketplace", link: "/examples/nft-marketplace"},
            {text: "DAO with Governance", link: "/examples/dao-governance"},
        ],
    },
    {
        text: "Glossary",
        collapsed: true,
        items: [
            {text: "Movement Terminology", link: "/glossary/terminology"},
            {text: "Key Concepts", link: "/glossary/key-concepts"},
        ],
    },
];

export default sidebar;