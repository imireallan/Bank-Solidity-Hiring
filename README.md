# Bank-Solidity-Hiring

Syndicate's hiring test for Solidity engineers

### Common Issues

If you receive an error along the lines of `Ganache CLI v6.12.2 (ganache-core: 2.13.2) Error: The fork provider errored when checking the nonce for account 0x98c31a46ae41253b2d96f702883f20e24634bd3a: Returned error: header not found` or `Error: while migrating Migrations: Returned error: Returned error: missing trie node 71b994905112eb743856facd1284a03324d4f0ed05b76cba734dabaed4489057 (path )`, this is an issue with the Ethereum gateway being out of date. You should wait a few minutes and try running `npm start` again.
