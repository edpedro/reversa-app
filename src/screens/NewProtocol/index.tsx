import { Box, Heading, Center, Pressable, HStack, Divider } from 'native-base';

export default function NewProtocol() {
  return (
    <Box flex={1} w="100%" h="100%" flexDirection="column" bg="white" p="10">
      <Center w="100%">
        <Heading
          p="5"
          style={{
            fontFamily: 'Inter_600SemiBold',
            fontSize: 22,
          }}
        >
          Novo Protocolo
        </Heading>
        <Pressable onPress={() => console.log('Novo protocolo')}>
          {({ isPressed }) => (
            <>
              <Box
                _dark={{
                  borderColor: 'muted.50',
                }}
                borderColor="muted.800"
                pl={['0', '4']}
                pr={['1', '4']}
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <HStack w="100%" padding={3}>
                  <Divider
                    bg="green.500"
                    thickness="6"
                    orientation="vertical"
                    rounded="md"
                  />
                  <Box w="100%" h={100} bg="white" rounded="md" shadow="3">
                    <Heading
                      fontWeight="300"
                      color="gray.700"
                      mt="8"
                      ml="10"
                      style={{
                        fontFamily: 'Inter_400Regular',
                        fontSize: 22,
                      }}
                    >
                      NOVO PROTOLOCO
                    </Heading>
                  </Box>
                </HStack>
              </Box>
            </>
          )}
        </Pressable>
        <Pressable onPress={() => console.log('Listar protocolo')}>
          {({ isPressed }) => (
            <>
              <Box
                _dark={{
                  borderColor: 'muted.50',
                }}
                borderColor="muted.800"
                pl={['0', '4']}
                pr={['1', '4']}
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <HStack w="100%" padding={3}>
                  <Divider
                    bg="green.500"
                    thickness="6"
                    orientation="vertical"
                    rounded="md"
                  />
                  <Box w="100%" h={100} bg="white" rounded="md" shadow="3">
                    <Heading
                      fontWeight="300"
                      color="gray.700"
                      mt="8"
                      ml="10"
                      style={{
                        fontFamily: 'Inter_400Regular',
                        fontSize: 22,
                      }}
                    >
                      LISTAR PROTOCOLO
                    </Heading>
                  </Box>
                </HStack>
              </Box>
            </>
          )}
        </Pressable>
        <Pressable onPress={() => console.log('Adicionar Serial')}>
          {({ isPressed }) => (
            <>
              <Box
                _dark={{
                  borderColor: 'muted.50',
                }}
                borderColor="muted.800"
                pl={['0', '4']}
                pr={['1', '4']}
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <HStack w="100%" padding={3}>
                  <Divider
                    bg="green.500"
                    thickness="6"
                    orientation="vertical"
                    rounded="md"
                  />
                  <Box w="100%" h={100} bg="white" rounded="md" shadow="3">
                    <Heading
                      fontWeight="300"
                      color="gray.700"
                      mt="8"
                      ml="10"
                      style={{
                        fontFamily: 'Inter_400Regular',
                        fontSize: 22,
                      }}
                    >
                      ADICIONAR SERIAL
                    </Heading>
                  </Box>
                </HStack>
              </Box>
            </>
          )}
        </Pressable>
        <Pressable onPress={() => console.log('Deletar Serial')}>
          {({ isPressed }) => (
            <>
              <Box
                _dark={{
                  borderColor: 'muted.50',
                }}
                borderColor="muted.800"
                pl={['0', '4']}
                pr={['1', '4']}
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <HStack w="100%" padding={3}>
                  <Divider
                    bg="red.600"
                    thickness="6"
                    orientation="vertical"
                    rounded="md"
                  />
                  <Box w="100%" h={100} bg="white" rounded="md" shadow="3">
                    <Heading
                      fontWeight="300"
                      color="gray.700"
                      mt="8"
                      ml="10"
                      style={{
                        fontFamily: 'Inter_400Regular',
                        fontSize: 22,
                      }}
                    >
                      DELETAR SERIAL
                    </Heading>
                  </Box>
                </HStack>
              </Box>
            </>
          )}
        </Pressable>
        <Pressable onPress={() => console.log('Deletar Protoclo')}>
          {({ isPressed }) => (
            <>
              <Box
                _dark={{
                  borderColor: 'muted.50',
                }}
                borderColor="muted.800"
                pl={['0', '4']}
                pr={['1', '4']}
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <HStack w="100%" padding={3}>
                  <Divider
                    bg="red.600"
                    thickness="6"
                    orientation="vertical"
                    rounded="md"
                  />
                  <Box w="100%" h={100} bg="white" rounded="md" shadow="3">
                    <Heading
                      fontWeight="300"
                      color="gray.700"
                      mt="8"
                      ml="10"
                      style={{
                        fontFamily: 'Inter_400Regular',
                        fontSize: 22,
                      }}
                    >
                      DELETAR PROTOCOLO
                    </Heading>
                  </Box>
                </HStack>
              </Box>
            </>
          )}
        </Pressable>
      </Center>
    </Box>
  );
}
