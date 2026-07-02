# Bruno POC

## References

- https://docs.usebruno.com/
- https://docs.usebruno.com/cli/overview.html
- https://docs.usebruno.com/bru-lang-overview.html
- https://github.com/diegopacheco/nodejs-playground/tree/main/bruno-postman-oss-fun

## Usage

- Install bruno
```shell
npm install -g @usebruno/cli
```

- Run
```shell
bru run --env Local
```

- Run and collect responses
```shell
bru run --env Local --output results.json 
```

## Public API

- https://docs.awesomeapi.com.br/api-de-moedas
- request:
```
curl --location 'https://economia.awesomeapi.com.br/last/USD-BRL,BTC-BRL'
```
- response:
```json
{
    "USDBRL": {
        "code": "USD",
        "codein": "BRL",
        "name": "Dólar Americano/Real Brasileiro",
        "high": "5.0549",
        "low": "5.0238",
        "varBid": "0.0084",
        "pctChange": "0.17",
        "bid": "5.0334",
        "ask": "5.0339",
        "timestamp": "1710858508",
        "create_date": "2024-03-19 11:28:28"
    },
    "BTCBRL": {
        "code": "BTC",
        "codein": "BRL",
        "name": "Bitcoin/Real Brasileiro",
        "high": "344702",
        "low": "315818",
        "varBid": "-24794",
        "pctChange": "-7.28",
        "bid": "315940",
        "ask": "316000",
        "timestamp": "1710858514",
        "create_date": "2024-03-19 11:28:34"
    }
}
```