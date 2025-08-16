import { useState, useEffect } from "react";
import { Container, Grid, Card, Image, Group, Text, Badge, Button, Drawer } from "@mantine/core";
import { CryptoLoader } from "./components/Loader";
import { useData } from "./hooks/useData";

const App = () => {
    const [coinData, setCoinData] = useState({}); 
    const [selectedCoin, setSelectedCoin] = useState([]);
    const { data, isLoading, error } = useData(); // pass a number when ready to call api in intervals
   
    useEffect(() => {
        if (data && data.length) {
            const dataMap = data.reduce((acc, curr) => {
                if (curr.id) {
                    const { id } = curr; 
                    acc[id] = !acc[id] ? [curr] : acc[id].push(curr);
                } 

                return acc;
            }, {});

            setCoinData(dataMap);
        }
    }, [data]);

    const selectCoin = (id) => {
        setSelectedCoin(coinData[id]); 
    };

    return (
        <Container fluid>
            <CryptoLoader visible={isLoading}>
                <Grid> 
                    {data && data.length ? data.map((coin) => {
                        return (
                            <Grid.Col span={{ sm: '12', md: '6', lg: '4' }}>
                                <Card shadow='sm' padding="lg" radius="md" withBorder>
                                    <Card.Section>
                                        <Image
                                            src={coin.image}
                                            height={160}
                                            alt={coin.name}
                                            fit='contain'
                                        />
                                    </Card.Section>
                                    <Group justify="space-between" mt="md" mb="xs">
                                        <Text fw={500}>{coin.name}</Text>
                                        <Badge color="pink">Rank: {coin.market_cap_rank}</Badge>
                                    </Group>
                                    <Grid.Col span='4'>
                                         <Button color="blue" fullWidth mt="md" radius="md" onClick={() => selectCoin(coin.id)}>
                                            {coin.name} Charts
                                        </Button>
                                    </Grid.Col>
                                </Card>
                            </Grid.Col>
                        )
                    }) : null}
                </Grid>
            </CryptoLoader>
        </Container>
    );
}; 

export default App;