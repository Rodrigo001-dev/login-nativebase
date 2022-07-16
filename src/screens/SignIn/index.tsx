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
  WarningOutlineIcon,
  Image,
  Slider,
  Switch,
  useColorMode,
} from 'native-base';

export function SignIn() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    // o Center vai centralizar o conteudo
    <Center
      height="full"
      _dark={{ bg: "black" }}
      _light={{ bg: "white" }}
    >

      <Image
        size={150}
        source={{ uri: 'https://github.com/Rodrigo001-dev.png' }}
        alt="Imagem do perfil do Usuário"
        resizeMode='contain'
      />

      <VStack 
        width="full"
        p={10}
      >
        {/* o componente Box é como se fosse uma View ou uma div */}
        <Box width="full">
          {/* o Heading é para exibir texto em destaque */}
          <Heading 
            color="coolGray.700"
            // no _dark vou pasar a estilização quando estiver no tema dark
            _dark={{ color: "white" }}
            // no _light vou pasar a estilização quando estiver no tema light
            _light= {{ color: "coolGray.700" }}
          >
            Entrar
          </Heading>

          <FormControl isInvalid isRequired>
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

            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
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

        <Box alignItems="center" w="100%">
          <Slider w="3/4" maxW="300" defaultValue={70} minValue={0} maxValue={100}>
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
        </Box>

        <HStack alignItems="center" space={4}>
          <Text>Dark</Text>
          <Switch
            isChecked={colorMode === "light"}
            onToggle={toggleColorMode}
            // o aria-label é a menssagem de acessibilidade
            aria-label={
              colorMode === "light" ? "troque para o tema escuro" : "troque para o tema claro"
            }
          />
          <Text>Light</Text>
        </HStack>
      </VStack>
    </Center>
  );
};