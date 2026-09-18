import { ScrollView, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CaseCard from "@/components/CaseCard";
import { mockCases } from "@/data/cases";
import { useCallback, useEffect, useMemo, useState } from "react";
import useStorage from "@/hooks/useStorage";
import { useFocusEffect } from "expo-router";
import Case from "@/interfaces/Case";

type CaseFilter = "all" | "completed" | "pending";
const CASE_FILTERS: { label: string; value: CaseFilter }[] = [
  { label: "All", value: "all" },
  { label: "Completed", value: "completed" },
  { label: "Pending", value: "pending" },
];

export default function Index() {
  const { getCompletedCases } = useStorage();

  const [completedCases, setCompletedCases] = useState<string[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<CaseFilter>("all");

  const filteredCases = useMemo(() => {
    if (selectedFilter === "completed")
      return mockCases.filter((c) => completedCases.includes(c.id));
    if (selectedFilter === "pending")
      return mockCases.filter((c) => !completedCases.includes(c.id));
    return mockCases;
  }, [selectedFilter, completedCases]);

  useFocusEffect(
    useCallback(() => {
      async function fetchCompletedCases() {
        const cases = await getCompletedCases();
        setCompletedCases(cases);
      }

      fetchCompletedCases();
    }, [getCompletedCases]),
  );

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
          {/* FILTERS */}
          <View className="w-full mb-2 flex-row items-center gap-3">
            {CASE_FILTERS.map((filter) => (
              <Pressable
                key={filter.value}
                onPress={() => setSelectedFilter(filter.value)}
                className={`min-w-20 max-w-max border ${filter.value === selectedFilter ? "bg-primary border-primary" : "bg-card border-border"} px-4 py-1.5 items-center justify-center rounded-full transition-all duration-200 ease-out active:scale-[0.98] active:translate-y-1`}
              >
                <Text
                  className={`${filter.value === selectedFilter ? "text-foreground" : "text-muted-foreground"} text-base font-jakarta-semibold transition-all duration-200 ease-out`}
                >
                  {filter.label}
                </Text>
              </Pressable>
            ))}
          </View>

          {filteredCases.map((item, index) => (
            <CaseCard
              key={item.id}
              id={item.id}
              caseNo={item.caseNo}
              title={item.title}
              description={item.description}
              difficulty={item.difficulty}
              isCompleted={completedCases.includes(item.id)}
              isPrevCompleted={
                index === 0 ||
                completedCases.includes(filteredCases[index - 1]?.id)
              }
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
