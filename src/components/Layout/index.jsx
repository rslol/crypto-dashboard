import { useState } from "react";
import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { generateRandomGradient } from "../../utils";
import '../../App.css';

export const AppLayout = ({children}) => {
	const [opened, { toggle }] = useDisclosure(); 
  const [gradient, setGradient] = useState(generateRandomGradient());

	return (
		<AppShell
      header={{ height: 60 }}
      navbar={{ width: 250, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
      style={{
        background: gradient
      }}
    >
			 <AppShell.Header className='transparent-card'>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md" className='transparent-card'>
        {/* Future links here */}
      </AppShell.Navbar>
      <AppShell.Main>
        { children }
      </AppShell.Main>
		</AppShell>
	)
}; 