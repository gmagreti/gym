import { useState } from "react";
import { FlatList, HStack, Heading, Text, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { Group } from "@components/group";
import { HomeHeader } from "@components/home-header";
import { ExerciseCard } from "@components/exercise-card";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function Home() {
  const [groups, setGroups] = useState([
    "Costas",
    "Bíceps",
    "Tríceps",
    "ombro",
  ]);
  const [exercises, setExercises] = useState([
    "Puxada frontal",
    "Remada curvada",
    "Remada unilateral",
    "Levantamento terras",
    "Levantamento terras 2",
    "Levantamento terras 3",
  ]);
  const [groupSelected, setGroupSelected] = useState("Costas");

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenExerciseDetails() {
    navigation.navigate("exercise");
  }

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={
              groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()
            }
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxHeight={10}
        minH={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md" fontFamily="heading">
            Exercícios
          </Heading>

          <Text color="gray.200" fontSize="sm">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ExerciseCard onPress={handleOpenExerciseDetails} />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  );
}
