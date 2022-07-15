import React from 'react';
import { 
  Box,
  Center,
  Heading,
  Input,
  FormControl,
  VStack,
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
          />

          <FormControl.Label>Senha</FormControl.Label>
          <Input placeholder='sua senha' />
        </FormControl>
      </Box>
    </Center>
  );
};