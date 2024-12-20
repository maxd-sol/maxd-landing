/**
 * This file was auto-generated by swagger-to-ts.
 * Do not make direct changes to the file.
 */

export interface rugcheckApi {
  'dto.AuthMessage': {
    message?: string
    publicKey?: string
    timestamp?: number
  }
  'dto.AuthRequest': {
    message?: rugcheckApi['dto.AuthMessage']
    signature?: { data?: number[]; type?: string }
    wallet?: string
  }
  'dto.AuthResponse': { token?: string }
  'dto.DomainResponse': {
    tokens?: rugcheckApi['rugcheck_api.VerifiedTokenSimple']
  }
  'dto.Pong': { message?: string }
  'dto.TokenInfoAgg': {
    metadata?: rugcheckApi['rugcheck_api.TokenMetadata']
    mint?: string
    score?: number
    user_visits?: number
    visits?: number
  }
  'dto.VaultResponse': {
    lockers?: { [key: string]: ref }
    total?: rugcheckApi['dto.VaultResponseSummary']
  }
  'dto.VaultResponseSummary': { pct?: number; totalUSDC?: number }
  'dto.VoteRequest': { mint?: string; side?: boolean }
  'dto.VoteResponse': { down?: number; up?: number; userVoted?: boolean }
  'rugcheck_api.FileMetadata': {
    description?: string
    image?: string
    name?: string
    symbol?: string
  }
  'rugcheck_api.KnownAccount': { name?: string; type?: string }
  'rugcheck_api.Locker': {
    owner?: string
    programID?: string
    tokenAccount?: string
    type?: string
    unlockDate?: number
    uri?: string
    usdcLocked?: number
  }
  'rugcheck_api.Market': {
    liquidityA?: string
    liquidityAAccount?: string
    liquidityB?: string
    liquidityBAccount?: string
    lp?: rugcheckApi['rugcheck_api.MarketLP']
    marketType?: string
    mintA?: string
    mintAAccount?: string
    mintB?: string
    mintBAccount?: string
    mintLP?: string
    mintLPAccount?: string
    pubkey?: string
  }
  'rugcheck_api.MarketLP': {
    base?: number
    baseMint?: string
    basePrice?: number
    baseUSD?: number
    currentSupply?: number
    holders?: rugcheckApi['rugcheck_api.TokenHolder'][]
    lpCurrentSupply?: number
    lpLocked?: number
    lpLockedPct?: number
    lpLockedUSD?: number
    lpMaxSupply?: number
    lpMint?: string
    lpTotalSupply?: number
    lpUnlocked?: number
    pctReserve?: number
    pctSupply?: number
    quote?: number
    quoteMint?: string
    quotePrice?: number
    quoteUSD?: number
    reserveSupply?: number
    tokenSupply?: number
    totalTokensUnlocked?: number
  }
  'rugcheck_api.Risk': {
    description?: string
    level?: string
    name?: string
    score?: number
    value?: string
  }
  'rugcheck_api.Token': {
    createAt?: string
    creator?: string
    decimals?: number
    events?: rugcheckApi['rugcheck_api.TokenEvent'][]
    freezeAuthority?: string
    mint?: string
    mintAuthority?: string
    program?: string
    symbol?: string
    updatedAt?: string
  }
  'rugcheck_api.TokenCheck': {
    creator?: string
    detectedAt?: string
    events?: rugcheckApi['rugcheck_api.TokenEvent'][]
    fileMeta?: rugcheckApi['rugcheck_api.FileMetadata']
    freezeAuthority?: string
    knownAccounts?: { [key: string]: ref }
    lockerOwners?: { [key: string]: boolean }
    /**
     * TODO
     */
    lockers?: { [key: string]: ref }
    /**
     * TODO
     */
    lpLockers?: { [key: string]: any }
    markets?: rugcheckApi['rugcheck_api.Market'][]
    mint?: string
    mintAuthority?: string
    risks?: rugcheckApi['rugcheck_api.Risk'][]
    rugged?: boolean
    score?: number
    token?: string
    /**
     * TODO Meta struct
     */
    tokenMeta?: rugcheckApi['rugcheck_api.TokenMetadata']
    tokenProgram?: string
    tokenType?: string
    token_extensions?: string
    topHolders?: rugcheckApi['rugcheck_api.TokenHolder'][]
    totalLPProviders?: number
    totalMarketLiquidity?: number
    transferFee?: { authority?: string; maxAmount?: number; pct?: number }
    verification?: rugcheckApi['rugcheck_api.VerifiedToken']
  }
  'rugcheck_api.TokenEvent': {
    createdAt?: string
    event?: number
    newValue?: string
    oldValue?: string
  }
  'rugcheck_api.TokenHolder': {
    address?: string
    amount?: number
    decimals?: number
    insider?: boolean
    owner?: string
    pct?: number
    uiAmount?: number
    uiAmountString?: string
  }
  'rugcheck_api.TokenMetadata': {
    mutable?: boolean
    name?: string
    symbol?: string
    updateAuthority?: string
    uri?: string
  }
  'rugcheck_api.VerifiedToken': {
    description?: string
    jup_verified?: boolean
    links?: rugcheckApi['rugcheck_api.VerifiedTokenLinks'][]
    mint?: string
    name?: string
    payer?: string
    symbol?: string
  }
  'rugcheck_api.VerifiedTokenLinks': { provider?: string; value?: string }
  'rugcheck_api.VerifiedTokenSimple': {
    createdAt?: string
    domain?: string
    mint?: string
    name?: string
    symbol?: string
  }
  'services.TrendingToken': {
    mint?: string
    up_count?: number
    vote_count?: number
  }
}
