import { mockCases } from "@/data/cases";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const SolveCase = () => {
  const { caseId } = useLocalSearchParams<{ caseId: string }>();
  const caseDetails = mockCases.find((c) => c.id === caseId);

  if (!caseDetails) return;

  return (
    <View>
      <Text>Case ID: {caseDetails.id}</Text>
    </View>
  );
};

export default SolveCase;
