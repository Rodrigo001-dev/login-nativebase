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
  Checkbox,
  Text,
  HStack,
  VStack,
} from 'native-base';

export function SignIn() {
  return (
    // o Center vai centralizar o conteudo
    <Center
      height="full"
    >
      <VStack 
        width="full"
        p={10}
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

            <FormControl.ErrorMessage>
              E-mail inválido
            </FormControl.ErrorMessage>

          </FormControl>


          <FormControl>
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

        <HStack mt={5}>
          <Checkbox value="agree" />

          <Text ml={3}>
            Concordo com a politica de segurança
          </Text>
        </HStack>
      </VStack>
    </Center>
  );
};