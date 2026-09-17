import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CaseCard from "@/components/CaseCard";
import { mockCases } from "@/data/cases";
import { useEffect, useState } from "react";
import useStorage from "@/hooks/useStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
  const { getCompletedCases } = useStorage();

  const [completedCases, setCompletedCases] = useState<string[]>([]);

  useEffect(() => {
    async function fetchCompletedCases() {
      const cases = await getCompletedCases();
      setCompletedCases(cases);
    }

    fetchCompletedCases();
  }, []);

  return (
    <View className="flex-1 bg-background px-6 py-4">
      <SafeAreaView style={{ flex: 1 }}>
        {/* HEADER */}
        <View>
          <Text className="text-foreground font-jakarta-extrabold text-4xl tracking-wide">
            Whodoo
          </Text>
        </View>

        {/* CONTENT */}
        <ScrollView
          style={{ flex: 1, marginTop: 24 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 12 }}
        >
          {mockCases.map((item, index) => (
            <CaseCard
              key={item.id}
              id={item.id}
              caseNo={item.caseNo}
              title={item.title}
              description={item.description}
              difficulty={item.difficulty}
              isCompleted={completedCases.includes(item.id)}
              isPrevCompleted={
                index === 0 || completedCases.includes(mockCases[index - 1]?.id)
              }
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
