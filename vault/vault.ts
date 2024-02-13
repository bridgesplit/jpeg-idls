export type Vault = {
  "version": "0.1.1",
  "name": "vault",
  "instructions": [
    {
      "name": "fractionalize",
      "accounts": [
        {
          "name": "payerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionsMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fractionsTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "initializerNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionsProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "publicKey"
        },
        {
          "name": "numShares",
          "type": "u64"
        },
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        }
      ]
    },
    {
      "name": "depositWenft",
      "accounts": [
        {
          "name": "payerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionsMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "initializerNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "fractionalizeWenft",
      "accounts": [
        {
          "name": "payerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionsMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fractionsTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "publicKey"
        },
        {
          "name": "numShares",
          "type": "u64"
        },
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        }
      ]
    },
    {
      "name": "updateMetadata",
      "accounts": [
        {
          "name": "updaterAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionsMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        }
      ]
    },
    {
      "name": "fractionalizePnft",
      "accounts": [
        {
          "name": "payerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionsMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fractionsTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "initializerNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionsProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "publicKey"
        },
        {
          "name": "numShares",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createTokenMetadataSingleAsset",
      "accounts": [
        {
          "name": "payerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionsMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        }
      ]
    },
    {
      "name": "fuse",
      "accounts": [
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionsMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fractionsTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lockedNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "startAuction",
      "accounts": [
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionsMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "initializerTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bidInSol",
          "type": "u64"
        },
        {
          "name": "bidInFnfts",
          "type": "u64"
        },
        {
          "name": "minBid",
          "type": "u64"
        }
      ]
    },
    {
      "name": "placeBid",
      "accounts": [
        {
          "name": "bidderAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "previousBidderAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "previousBidderTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fractionsMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bidderTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "totalSol",
          "type": "u64"
        },
        {
          "name": "bidInSol",
          "type": "u64"
        },
        {
          "name": "bidInFnfts",
          "type": "u64"
        }
      ]
    },
    {
      "name": "endAuction",
      "accounts": [
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "treasuryAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "winningBidderAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "winningBidderTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fractionsMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "winnerNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMetadataAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "redeem",
      "accounts": [
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionsMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "redeemerFractionsAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMetadataAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimAssets",
      "accounts": [
        {
          "name": "buyerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "buyerTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintPubkey",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "fusePnft",
      "accounts": [
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionsMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fractionsTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lockedNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionsProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createTokenMetadataFractionalPool",
      "accounts": [
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionalPoolMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        }
      ]
    },
    {
      "name": "updateTokenMetadataFractionalPool",
      "accounts": [
        {
          "name": "payerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "poolAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        }
      ]
    },
    {
      "name": "initializeFractionalPool",
      "accounts": [
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "poolMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "externalAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "appraiser",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "createExternalAccount",
      "accounts": [
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionalPoolMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "externalAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "appraiser",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createAppraisal",
      "accounts": [
        {
          "name": "appraiser",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "initializer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionalPoolMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "externalAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "appraisal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateAppraiser",
      "accounts": [
        {
          "name": "authorityAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionalPoolMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "externalAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "appraiser",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "depositFractionalPool",
      "accounts": [
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fnftMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pnftMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "initializerFnftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "initializerPnftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolFnftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "appraisal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "shares",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawFractionalPool",
      "accounts": [
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fnftMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "initializerFnftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programFnftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pnftMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "initializerPnftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "appraisal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "shares",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "challengePeriodAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "initializerPubkey",
            "type": "publicKey"
          },
          {
            "name": "challengeStartTime",
            "type": "i64"
          },
          {
            "name": "challengeEndTime",
            "type": "i64"
          },
          {
            "name": "bidAmountSol",
            "type": "u64"
          },
          {
            "name": "ended",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "fee",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lamports",
            "type": "u64"
          },
          {
            "name": "index",
            "type": "u64"
          },
          {
            "name": "feeAccount",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "singleAssetClaimApprover",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "vaultAccount",
            "type": "publicKey"
          },
          {
            "name": "basePctThreshold",
            "type": "u64"
          },
          {
            "name": "challengePctThreshold",
            "type": "u64"
          },
          {
            "name": "paymentAmount",
            "type": "u64"
          },
          {
            "name": "paymentMint",
            "type": "publicKey"
          },
          {
            "name": "paymentManager",
            "type": "publicKey"
          },
          {
            "name": "tokenManager",
            "type": "publicKey"
          },
          {
            "name": "collector",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "vaultMetadata",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "bank",
            "type": "publicKey"
          },
          {
            "name": "buffer",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "vaultAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fractionsMint",
            "type": "publicKey"
          },
          {
            "name": "vaultAta",
            "type": "publicKey"
          },
          {
            "name": "nftMint",
            "type": "publicKey"
          },
          {
            "name": "initializerAccount",
            "type": "publicKey"
          },
          {
            "name": "winnerPubkey",
            "type": "publicKey"
          },
          {
            "name": "emptyAccount",
            "type": "publicKey"
          },
          {
            "name": "oracleAccount",
            "type": "publicKey"
          },
          {
            "name": "issuedShares",
            "type": "u64"
          },
          {
            "name": "outstandingShares",
            "type": "u64"
          },
          {
            "name": "creationTime",
            "type": "i64"
          },
          {
            "name": "salePrice",
            "type": "u64"
          },
          {
            "name": "state",
            "type": "u16"
          },
          {
            "name": "hash",
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          },
          {
            "name": "flag",
            "type": "u8"
          },
          {
            "name": "version",
            "type": "u16"
          },
          {
            "name": "auction",
            "type": {
              "defined": "AuctionAccount"
            }
          }
        ]
      }
    },
    {
      "name": "poolAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fractionsMint",
            "type": "publicKey"
          },
          {
            "name": "initializerAccount",
            "type": "publicKey"
          },
          {
            "name": "winnerPubkey",
            "type": "publicKey"
          },
          {
            "name": "buyoutPubkey",
            "type": "publicKey"
          },
          {
            "name": "votePubkey",
            "type": "publicKey"
          },
          {
            "name": "issuedShares",
            "type": "u64"
          },
          {
            "name": "outstandingShares",
            "type": "u64"
          },
          {
            "name": "creationTime",
            "type": "i64"
          },
          {
            "name": "buyoutPrice",
            "type": "u64"
          },
          {
            "name": "salePrice",
            "type": "u64"
          },
          {
            "name": "addEnabled",
            "type": "bool"
          },
          {
            "name": "fuseEnabled",
            "type": "bool"
          },
          {
            "name": "state",
            "type": "u16"
          },
          {
            "name": "auction",
            "type": {
              "defined": "AuctionAccount"
            }
          },
          {
            "name": "version",
            "type": "u16"
          },
          {
            "name": "title",
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          }
        ]
      }
    },
    {
      "name": "fractionalPoolExternal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "appraiser",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "fractionalPoolAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fractionalPoolMint",
            "type": "publicKey"
          },
          {
            "name": "initializerAccount",
            "type": "publicKey"
          },
          {
            "name": "issuedShares",
            "type": "u64"
          },
          {
            "name": "outstandingShares",
            "type": "u64"
          },
          {
            "name": "creationTime",
            "type": "i64"
          },
          {
            "name": "version",
            "type": "u16"
          },
          {
            "name": "paused",
            "type": "bool"
          },
          {
            "name": "hash",
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          }
        ]
      }
    },
    {
      "name": "appraisal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "slot",
            "type": "u64"
          },
          {
            "name": "tokenAmount",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "AuctionAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lastBid",
            "type": {
              "defined": "BidAccount"
            }
          },
          {
            "name": "auctionStartTime",
            "type": "i64"
          },
          {
            "name": "auctionEndTime",
            "type": "i64"
          },
          {
            "name": "instantBuyoutPrice",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "BidAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bidderAccount",
            "type": "publicKey"
          },
          {
            "name": "bidderTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "totalBid",
            "type": "u64"
          },
          {
            "name": "bidInSol",
            "type": "u64"
          },
          {
            "name": "bidInFnft",
            "type": "u64"
          },
          {
            "name": "bidTime",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "FeeInstruction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "DEPOSIT"
          },
          {
            "name": "WITHDRAW"
          },
          {
            "name": "EXCHANGE"
          }
        ]
      }
    },
    {
      "name": "VaultState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "INITIALISED"
          },
          {
            "name": "AUCTION"
          },
          {
            "name": "CLOSED"
          },
          {
            "name": "FUSED"
          },
          {
            "name": "RENTED"
          },
          {
            "name": "CHALLENGE"
          }
        ]
      }
    },
    {
      "name": "ElixirEventType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Buy"
          },
          {
            "name": "Sell"
          },
          {
            "name": "Fractionalize"
          },
          {
            "name": "Fuse"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "ElixirEvent",
      "fields": [
        {
          "name": "eventType",
          "type": "u8",
          "index": false
        },
        {
          "name": "vaultAddress",
          "type": "string",
          "index": false
        },
        {
          "name": "poolMint",
          "type": "string",
          "index": false
        },
        {
          "name": "fractionsMint",
          "type": "string",
          "index": false
        },
        {
          "name": "nftMint",
          "type": "string",
          "index": false
        },
        {
          "name": "nftAccount",
          "type": "string",
          "index": false
        },
        {
          "name": "initializer",
          "type": "string",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidBuyoutPrice",
      "msg": "Buyout price must be a multiple of num shares."
    },
    {
      "code": 6001,
      "name": "AccountMissing",
      "msg": "Account missing"
    },
    {
      "code": 6002,
      "name": "InitializerMisMatch",
      "msg": "Initializer mismatch"
    },
    {
      "code": 6003,
      "name": "WrongHash",
      "msg": "Wrong size hash"
    },
    {
      "code": 6004,
      "name": "WrongTitle",
      "msg": "Wrong size title"
    },
    {
      "code": 6005,
      "name": "ReservePriceLimitReached",
      "msg": "Buyout price must be less than 9223372036 SOL"
    },
    {
      "code": 6006,
      "name": "TimeOverflow",
      "msg": "Time has overflowed"
    },
    {
      "code": 6007,
      "name": "IncorrectFractionsMint",
      "msg": "Incorrect fractions mint account given in."
    },
    {
      "code": 6008,
      "name": "IncorrectLockedNFTAccount",
      "msg": "Incorrect locked NFT account given in."
    },
    {
      "code": 6009,
      "name": "FuseInsufficientShares",
      "msg": "Not enough shares held to fuse."
    },
    {
      "code": 6010,
      "name": "UnavailableForBuyout",
      "msg": "NFT no longer available for buyout."
    },
    {
      "code": 6011,
      "name": "TooPoor",
      "msg": "Need more lamports."
    },
    {
      "code": 6012,
      "name": "AmountOverflow",
      "msg": "Lamport overflow on transfer."
    },
    {
      "code": 6013,
      "name": "AmountUnderflow",
      "msg": "Lamport underflow on transfer."
    },
    {
      "code": 6014,
      "name": "NotSold",
      "msg": "Nothing to redeem, NFT not sold."
    },
    {
      "code": 6015,
      "name": "ZeroBuyout",
      "msg": "Buyout Value cannot be zero"
    },
    {
      "code": 6016,
      "name": "Sold",
      "msg": "Already Sold"
    },
    {
      "code": 6017,
      "name": "AuctionNotEnabled",
      "msg": "Auction not enabled, must be majority holder for auction"
    },
    {
      "code": 6018,
      "name": "AuctionNotEnded",
      "msg": "Auction not ended yet"
    },
    {
      "code": 6019,
      "name": "AuctionComplete",
      "msg": "Auction completed and closed"
    },
    {
      "code": 6020,
      "name": "UnauthorizedReceiver",
      "msg": "User not authorized to recieve previous bid"
    },
    {
      "code": 6021,
      "name": "UnauthorizedClaimer",
      "msg": "User not authorized to claim"
    },
    {
      "code": 6022,
      "name": "LowBuyout",
      "msg": "Buyout not high enough"
    },
    {
      "code": 6023,
      "name": "AuctionAlreadyEnabled",
      "msg": "Auction has already started"
    },
    {
      "code": 6024,
      "name": "PDAMismatch",
      "msg": "PDA account doesn't match"
    },
    {
      "code": 6025,
      "name": "ZeroShares",
      "msg": "Number of shares cannot be zero"
    },
    {
      "code": 6026,
      "name": "WrongIndex",
      "msg": "Wrong index, index not the next empty in array"
    },
    {
      "code": 6027,
      "name": "WrongAccount",
      "msg": "Wrong Metadata account"
    },
    {
      "code": 6028,
      "name": "NotATA",
      "msg": "Not an associated token account"
    },
    {
      "code": 6029,
      "name": "FailedToDeserialized",
      "msg": "Failed to deserialize"
    },
    {
      "code": 6030,
      "name": "IncorrectCreators",
      "msg": "Creators passed do not match the Metadata"
    },
    {
      "code": 6031,
      "name": "InsufficientAssetValue",
      "msg": "Value of exchange NFT below swap value"
    },
    {
      "code": 6032,
      "name": "DifferentSlot",
      "msg": "Appraiser created in a different slot"
    },
    {
      "code": 6033,
      "name": "InvalidFnftAmount",
      "msg": "Pool must own 100% OR LTE 50.1% of fnfts"
    }
  ]
};

export const IDL: Vault = {
  "version": "0.1.1",
  "name": "vault",
  "instructions": [
    {
      "name": "fractionalize",
      "accounts": [
        {
          "name": "payerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionsMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fractionsTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "initializerNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionsProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "publicKey"
        },
        {
          "name": "numShares",
          "type": "u64"
        },
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        }
      ]
    },
    {
      "name": "depositWenft",
      "accounts": [
        {
          "name": "payerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionsMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "initializerNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "fractionalizeWenft",
      "accounts": [
        {
          "name": "payerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionsMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fractionsTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "publicKey"
        },
        {
          "name": "numShares",
          "type": "u64"
        },
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        }
      ]
    },
    {
      "name": "updateMetadata",
      "accounts": [
        {
          "name": "updaterAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionsMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        }
      ]
    },
    {
      "name": "fractionalizePnft",
      "accounts": [
        {
          "name": "payerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionsMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fractionsTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "initializerNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionsProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "publicKey"
        },
        {
          "name": "numShares",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createTokenMetadataSingleAsset",
      "accounts": [
        {
          "name": "payerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionsMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        }
      ]
    },
    {
      "name": "fuse",
      "accounts": [
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionsMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fractionsTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lockedNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "startAuction",
      "accounts": [
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionsMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "initializerTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bidInSol",
          "type": "u64"
        },
        {
          "name": "bidInFnfts",
          "type": "u64"
        },
        {
          "name": "minBid",
          "type": "u64"
        }
      ]
    },
    {
      "name": "placeBid",
      "accounts": [
        {
          "name": "bidderAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "previousBidderAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "previousBidderTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fractionsMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bidderTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "totalSol",
          "type": "u64"
        },
        {
          "name": "bidInSol",
          "type": "u64"
        },
        {
          "name": "bidInFnfts",
          "type": "u64"
        }
      ]
    },
    {
      "name": "endAuction",
      "accounts": [
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "treasuryAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "winningBidderAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "winningBidderTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fractionsMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "winnerNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMetadataAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "redeem",
      "accounts": [
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionsMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "redeemerFractionsAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMetadataAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimAssets",
      "accounts": [
        {
          "name": "buyerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "buyerTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintPubkey",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "fusePnft",
      "accounts": [
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionsMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fractionsTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lockedNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionsProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createTokenMetadataFractionalPool",
      "accounts": [
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionalPoolMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        }
      ]
    },
    {
      "name": "updateTokenMetadataFractionalPool",
      "accounts": [
        {
          "name": "payerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "poolAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        }
      ]
    },
    {
      "name": "initializeFractionalPool",
      "accounts": [
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "poolMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "externalAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "appraiser",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "createExternalAccount",
      "accounts": [
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionalPoolMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "externalAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "appraiser",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createAppraisal",
      "accounts": [
        {
          "name": "appraiser",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "initializer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionalPoolMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "externalAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "appraisal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateAppraiser",
      "accounts": [
        {
          "name": "authorityAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fractionalPoolMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "externalAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "appraiser",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "depositFractionalPool",
      "accounts": [
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fnftMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pnftMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "initializerFnftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "initializerPnftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolFnftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "appraisal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "shares",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawFractionalPool",
      "accounts": [
        {
          "name": "initializerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fnftMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "initializerFnftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programFnftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pnftMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "initializerPnftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "appraisal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "shares",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "challengePeriodAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "initializerPubkey",
            "type": "publicKey"
          },
          {
            "name": "challengeStartTime",
            "type": "i64"
          },
          {
            "name": "challengeEndTime",
            "type": "i64"
          },
          {
            "name": "bidAmountSol",
            "type": "u64"
          },
          {
            "name": "ended",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "fee",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lamports",
            "type": "u64"
          },
          {
            "name": "index",
            "type": "u64"
          },
          {
            "name": "feeAccount",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "singleAssetClaimApprover",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "vaultAccount",
            "type": "publicKey"
          },
          {
            "name": "basePctThreshold",
            "type": "u64"
          },
          {
            "name": "challengePctThreshold",
            "type": "u64"
          },
          {
            "name": "paymentAmount",
            "type": "u64"
          },
          {
            "name": "paymentMint",
            "type": "publicKey"
          },
          {
            "name": "paymentManager",
            "type": "publicKey"
          },
          {
            "name": "tokenManager",
            "type": "publicKey"
          },
          {
            "name": "collector",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "vaultMetadata",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "bank",
            "type": "publicKey"
          },
          {
            "name": "buffer",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "vaultAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fractionsMint",
            "type": "publicKey"
          },
          {
            "name": "vaultAta",
            "type": "publicKey"
          },
          {
            "name": "nftMint",
            "type": "publicKey"
          },
          {
            "name": "initializerAccount",
            "type": "publicKey"
          },
          {
            "name": "winnerPubkey",
            "type": "publicKey"
          },
          {
            "name": "emptyAccount",
            "type": "publicKey"
          },
          {
            "name": "oracleAccount",
            "type": "publicKey"
          },
          {
            "name": "issuedShares",
            "type": "u64"
          },
          {
            "name": "outstandingShares",
            "type": "u64"
          },
          {
            "name": "creationTime",
            "type": "i64"
          },
          {
            "name": "salePrice",
            "type": "u64"
          },
          {
            "name": "state",
            "type": "u16"
          },
          {
            "name": "hash",
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          },
          {
            "name": "flag",
            "type": "u8"
          },
          {
            "name": "version",
            "type": "u16"
          },
          {
            "name": "auction",
            "type": {
              "defined": "AuctionAccount"
            }
          }
        ]
      }
    },
    {
      "name": "poolAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fractionsMint",
            "type": "publicKey"
          },
          {
            "name": "initializerAccount",
            "type": "publicKey"
          },
          {
            "name": "winnerPubkey",
            "type": "publicKey"
          },
          {
            "name": "buyoutPubkey",
            "type": "publicKey"
          },
          {
            "name": "votePubkey",
            "type": "publicKey"
          },
          {
            "name": "issuedShares",
            "type": "u64"
          },
          {
            "name": "outstandingShares",
            "type": "u64"
          },
          {
            "name": "creationTime",
            "type": "i64"
          },
          {
            "name": "buyoutPrice",
            "type": "u64"
          },
          {
            "name": "salePrice",
            "type": "u64"
          },
          {
            "name": "addEnabled",
            "type": "bool"
          },
          {
            "name": "fuseEnabled",
            "type": "bool"
          },
          {
            "name": "state",
            "type": "u16"
          },
          {
            "name": "auction",
            "type": {
              "defined": "AuctionAccount"
            }
          },
          {
            "name": "version",
            "type": "u16"
          },
          {
            "name": "title",
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          }
        ]
      }
    },
    {
      "name": "fractionalPoolExternal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "appraiser",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "fractionalPoolAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fractionalPoolMint",
            "type": "publicKey"
          },
          {
            "name": "initializerAccount",
            "type": "publicKey"
          },
          {
            "name": "issuedShares",
            "type": "u64"
          },
          {
            "name": "outstandingShares",
            "type": "u64"
          },
          {
            "name": "creationTime",
            "type": "i64"
          },
          {
            "name": "version",
            "type": "u16"
          },
          {
            "name": "paused",
            "type": "bool"
          },
          {
            "name": "hash",
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          }
        ]
      }
    },
    {
      "name": "appraisal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "slot",
            "type": "u64"
          },
          {
            "name": "tokenAmount",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "AuctionAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lastBid",
            "type": {
              "defined": "BidAccount"
            }
          },
          {
            "name": "auctionStartTime",
            "type": "i64"
          },
          {
            "name": "auctionEndTime",
            "type": "i64"
          },
          {
            "name": "instantBuyoutPrice",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "BidAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bidderAccount",
            "type": "publicKey"
          },
          {
            "name": "bidderTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "totalBid",
            "type": "u64"
          },
          {
            "name": "bidInSol",
            "type": "u64"
          },
          {
            "name": "bidInFnft",
            "type": "u64"
          },
          {
            "name": "bidTime",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "FeeInstruction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "DEPOSIT"
          },
          {
            "name": "WITHDRAW"
          },
          {
            "name": "EXCHANGE"
          }
        ]
      }
    },
    {
      "name": "VaultState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "INITIALISED"
          },
          {
            "name": "AUCTION"
          },
          {
            "name": "CLOSED"
          },
          {
            "name": "FUSED"
          },
          {
            "name": "RENTED"
          },
          {
            "name": "CHALLENGE"
          }
        ]
      }
    },
    {
      "name": "ElixirEventType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Buy"
          },
          {
            "name": "Sell"
          },
          {
            "name": "Fractionalize"
          },
          {
            "name": "Fuse"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "ElixirEvent",
      "fields": [
        {
          "name": "eventType",
          "type": "u8",
          "index": false
        },
        {
          "name": "vaultAddress",
          "type": "string",
          "index": false
        },
        {
          "name": "poolMint",
          "type": "string",
          "index": false
        },
        {
          "name": "fractionsMint",
          "type": "string",
          "index": false
        },
        {
          "name": "nftMint",
          "type": "string",
          "index": false
        },
        {
          "name": "nftAccount",
          "type": "string",
          "index": false
        },
        {
          "name": "initializer",
          "type": "string",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidBuyoutPrice",
      "msg": "Buyout price must be a multiple of num shares."
    },
    {
      "code": 6001,
      "name": "AccountMissing",
      "msg": "Account missing"
    },
    {
      "code": 6002,
      "name": "InitializerMisMatch",
      "msg": "Initializer mismatch"
    },
    {
      "code": 6003,
      "name": "WrongHash",
      "msg": "Wrong size hash"
    },
    {
      "code": 6004,
      "name": "WrongTitle",
      "msg": "Wrong size title"
    },
    {
      "code": 6005,
      "name": "ReservePriceLimitReached",
      "msg": "Buyout price must be less than 9223372036 SOL"
    },
    {
      "code": 6006,
      "name": "TimeOverflow",
      "msg": "Time has overflowed"
    },
    {
      "code": 6007,
      "name": "IncorrectFractionsMint",
      "msg": "Incorrect fractions mint account given in."
    },
    {
      "code": 6008,
      "name": "IncorrectLockedNFTAccount",
      "msg": "Incorrect locked NFT account given in."
    },
    {
      "code": 6009,
      "name": "FuseInsufficientShares",
      "msg": "Not enough shares held to fuse."
    },
    {
      "code": 6010,
      "name": "UnavailableForBuyout",
      "msg": "NFT no longer available for buyout."
    },
    {
      "code": 6011,
      "name": "TooPoor",
      "msg": "Need more lamports."
    },
    {
      "code": 6012,
      "name": "AmountOverflow",
      "msg": "Lamport overflow on transfer."
    },
    {
      "code": 6013,
      "name": "AmountUnderflow",
      "msg": "Lamport underflow on transfer."
    },
    {
      "code": 6014,
      "name": "NotSold",
      "msg": "Nothing to redeem, NFT not sold."
    },
    {
      "code": 6015,
      "name": "ZeroBuyout",
      "msg": "Buyout Value cannot be zero"
    },
    {
      "code": 6016,
      "name": "Sold",
      "msg": "Already Sold"
    },
    {
      "code": 6017,
      "name": "AuctionNotEnabled",
      "msg": "Auction not enabled, must be majority holder for auction"
    },
    {
      "code": 6018,
      "name": "AuctionNotEnded",
      "msg": "Auction not ended yet"
    },
    {
      "code": 6019,
      "name": "AuctionComplete",
      "msg": "Auction completed and closed"
    },
    {
      "code": 6020,
      "name": "UnauthorizedReceiver",
      "msg": "User not authorized to recieve previous bid"
    },
    {
      "code": 6021,
      "name": "UnauthorizedClaimer",
      "msg": "User not authorized to claim"
    },
    {
      "code": 6022,
      "name": "LowBuyout",
      "msg": "Buyout not high enough"
    },
    {
      "code": 6023,
      "name": "AuctionAlreadyEnabled",
      "msg": "Auction has already started"
    },
    {
      "code": 6024,
      "name": "PDAMismatch",
      "msg": "PDA account doesn't match"
    },
    {
      "code": 6025,
      "name": "ZeroShares",
      "msg": "Number of shares cannot be zero"
    },
    {
      "code": 6026,
      "name": "WrongIndex",
      "msg": "Wrong index, index not the next empty in array"
    },
    {
      "code": 6027,
      "name": "WrongAccount",
      "msg": "Wrong Metadata account"
    },
    {
      "code": 6028,
      "name": "NotATA",
      "msg": "Not an associated token account"
    },
    {
      "code": 6029,
      "name": "FailedToDeserialized",
      "msg": "Failed to deserialize"
    },
    {
      "code": 6030,
      "name": "IncorrectCreators",
      "msg": "Creators passed do not match the Metadata"
    },
    {
      "code": 6031,
      "name": "InsufficientAssetValue",
      "msg": "Value of exchange NFT below swap value"
    },
    {
      "code": 6032,
      "name": "DifferentSlot",
      "msg": "Appraiser created in a different slot"
    },
    {
      "code": 6033,
      "name": "InvalidFnftAmount",
      "msg": "Pool must own 100% OR LTE 50.1% of fnfts"
    }
  ]
};
