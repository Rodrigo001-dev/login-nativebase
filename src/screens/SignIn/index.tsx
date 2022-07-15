import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { 
  Box,
  Center,
  Heading,
  Input,
  FormControl,
  Icon,
  Button,
} from 'native-base';

export function SignIn() {
  return (
    // o Center vai centralizar o conteudo
    <Center
      height="full"
    >
      {/* o componente Box é como se fosse uma View ou uma div */}
      <Box width="full">
        {/* o Heading é para exibir texto em destaque */}
        <Heading color="coolGray.700">
          Entrar
        </Heading>

        <FormControl>
          <FormControl.Label>E-mail</FormControl.Label>
          <Input 
            placeholder='seu@email.com.br'
            InputLeftElement={
              <Icon 
                as={<MaterialIcons name="person" />}
                size={5}
                ml={2}
                color="muted.400"
              />
            }
          />

          <FormControl.Label>Senha</FormControl.Label>
          <Input 
            placeholder='sua senha' 
            InputLeftElement={
              <Icon 
                as={<MaterialIcons name="lock" />}
                size={5}
                ml={2}
                color="muted.400"
              />
            }
          />
        </FormControl>

        <Button
          mt="10"
          colorScheme="purple"
        >
          Entrar
        </Button>

      </Box>
    </Center>
  );
};