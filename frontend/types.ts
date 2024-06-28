export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    image: string;
}

export interface Login {
    username: string;
    password: string;
}

export interface Position {
    id: string;
    accrued_interest: string;
    number_of_shares: string;
    balance: string;
    capital_gain: string;
    cost: string;
    currency: string;
    entity: string;
    expiration_date: string;
    initial_date: string;
    interest_rate: string;
    is_nominal: string;
    isin: string;
    market: string;
    name: string;
    portfolio_id: string;
    type: string;
    valuation_date: string;
    rate_to_euro: string;
  }