import { GLError } from './error';
import { useQuery, useInfiniteQuery, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { useFetchData } from './fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

export type Query = {
  __typename?: 'Query';
  lernitasTokenData?: Maybe<TokenData>;
  tokenAmount?: Maybe<Scalars['Float']['output']>;
  zorkseesTokenData?: Maybe<TokenData>;
};


export type QueryTokenAmountArgs = {
  token: Scalars['String']['input'];
  walletAddress: Scalars['String']['input'];
};

export type TokenData = {
  __typename?: 'TokenData';
  TVL?: Maybe<Scalars['Float']['output']>;
  formattedTVL?: Maybe<Scalars['String']['output']>;
  maxTVL?: Maybe<Scalars['Float']['output']>;
  tokenPrice?: Maybe<Scalars['Float']['output']>;
  tokensPerShield?: Maybe<Scalars['Float']['output']>;
  totalSupply?: Maybe<Scalars['Float']['output']>;
  visibleShields?: Maybe<Scalars['Float']['output']>;
};

export type LernitasTokenDataQueryVariables = Exact<{ [key: string]: never; }>;


export type LernitasTokenDataQuery = { __typename?: 'Query', lernitasTokenData?: { __typename?: 'TokenData', visibleShields?: number | null, maxTVL?: number | null, TVL?: number | null, formattedTVL?: string | null } | null };

export type TokenAmountQueryVariables = Exact<{
  walletAddress: Scalars['String']['input'];
  token: Scalars['String']['input'];
}>;


export type TokenAmountQuery = { __typename?: 'Query', tokenAmount?: number | null };

export type ZorkseesTokenDataQueryVariables = Exact<{ [key: string]: never; }>;


export type ZorkseesTokenDataQuery = { __typename?: 'Query', zorkseesTokenData?: { __typename?: 'TokenData', visibleShields?: number | null, maxTVL?: number | null, TVL?: number | null, formattedTVL?: string | null } | null };



export const LernitasTokenDataDocument = `
    query lernitasTokenData {
  lernitasTokenData {
    visibleShields
    maxTVL
    TVL
    formattedTVL
  }
}
    `;

export const useLernitasTokenDataQuery = <
      TData = LernitasTokenDataQuery,
      TError = GLError
    >(
      variables?: LernitasTokenDataQueryVariables,
      options?: Omit<UseQueryOptions<LernitasTokenDataQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<LernitasTokenDataQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<LernitasTokenDataQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['lernitasTokenData'] : ['lernitasTokenData', variables],
    queryFn: useFetchData<LernitasTokenDataQuery, LernitasTokenDataQueryVariables>(LernitasTokenDataDocument).bind(null, variables),
    ...options
  }
    )};

export const useInfiniteLernitasTokenDataQuery = <
      TData = InfiniteData<LernitasTokenDataQuery>,
      TError = GLError
    >(
      variables: LernitasTokenDataQueryVariables,
      options: Omit<UseInfiniteQueryOptions<LernitasTokenDataQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<LernitasTokenDataQuery, TError, TData>['queryKey'] }
    ) => {
    const query = useFetchData<LernitasTokenDataQuery, LernitasTokenDataQueryVariables>(LernitasTokenDataDocument)
    return useInfiniteQuery<LernitasTokenDataQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['lernitasTokenData.infinite'] : ['lernitasTokenData.infinite', variables],
      queryFn: (metaData) => query({...variables, ...(metaData.pageParam ?? {})}),
      ...restOptions
    }
  })()
    )};

export const TokenAmountDocument = `
    query tokenAmount($walletAddress: String!, $token: String!) {
  tokenAmount(walletAddress: $walletAddress, token: $token)
}
    `;

export const useTokenAmountQuery = <
      TData = TokenAmountQuery,
      TError = GLError
    >(
      variables: TokenAmountQueryVariables,
      options?: Omit<UseQueryOptions<TokenAmountQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<TokenAmountQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<TokenAmountQuery, TError, TData>(
      {
    queryKey: ['tokenAmount', variables],
    queryFn: useFetchData<TokenAmountQuery, TokenAmountQueryVariables>(TokenAmountDocument).bind(null, variables),
    ...options
  }
    )};

export const useInfiniteTokenAmountQuery = <
      TData = InfiniteData<TokenAmountQuery>,
      TError = GLError
    >(
      variables: TokenAmountQueryVariables,
      options: Omit<UseInfiniteQueryOptions<TokenAmountQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<TokenAmountQuery, TError, TData>['queryKey'] }
    ) => {
    const query = useFetchData<TokenAmountQuery, TokenAmountQueryVariables>(TokenAmountDocument)
    return useInfiniteQuery<TokenAmountQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['tokenAmount.infinite', variables],
      queryFn: (metaData) => query({...variables, ...(metaData.pageParam ?? {})}),
      ...restOptions
    }
  })()
    )};

export const ZorkseesTokenDataDocument = `
    query zorkseesTokenData {
  zorkseesTokenData {
    visibleShields
    maxTVL
    TVL
    formattedTVL
  }
}
    `;

export const useZorkseesTokenDataQuery = <
      TData = ZorkseesTokenDataQuery,
      TError = GLError
    >(
      variables?: ZorkseesTokenDataQueryVariables,
      options?: Omit<UseQueryOptions<ZorkseesTokenDataQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<ZorkseesTokenDataQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<ZorkseesTokenDataQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['zorkseesTokenData'] : ['zorkseesTokenData', variables],
    queryFn: useFetchData<ZorkseesTokenDataQuery, ZorkseesTokenDataQueryVariables>(ZorkseesTokenDataDocument).bind(null, variables),
    ...options
  }
    )};

export const useInfiniteZorkseesTokenDataQuery = <
      TData = InfiniteData<ZorkseesTokenDataQuery>,
      TError = GLError
    >(
      variables: ZorkseesTokenDataQueryVariables,
      options: Omit<UseInfiniteQueryOptions<ZorkseesTokenDataQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<ZorkseesTokenDataQuery, TError, TData>['queryKey'] }
    ) => {
    const query = useFetchData<ZorkseesTokenDataQuery, ZorkseesTokenDataQueryVariables>(ZorkseesTokenDataDocument)
    return useInfiniteQuery<ZorkseesTokenDataQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['zorkseesTokenData.infinite'] : ['zorkseesTokenData.infinite', variables],
      queryFn: (metaData) => query({...variables, ...(metaData.pageParam ?? {})}),
      ...restOptions
    }
  })()
    )};
