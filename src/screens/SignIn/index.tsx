import React from 'react';
import { 
  Box,
  Center,
  Heading
} from 'native-base';

export function SignIn() {
  return (
    // o Center vai centralizar o conteudo
    <Center
      height="full"
    >
      {/* o componente Box é como se fosse uma View ou uma div */}
      <Box>
        {/* o Heading é para exibir texto */}
        <Heading>
          Entrar
        </Heading>
      </Box>
    </Center>
  );
};