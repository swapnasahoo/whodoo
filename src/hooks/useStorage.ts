import { CompletedCase } from "@/interfaces/Case";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useStorage() {
  async function getCompletedCases(): Promise<CompletedCase[]> {
    try {
      const completedCases =
        (await AsyncStorage.getItem("completedCases")) ?? "[]";
      const parsedCases: CompletedCase[] = JSON.parse(completedCases);
      return parsedCases;
    } catch (error) {
      console.error("Failed to get completed cases", error);
      return [];
    }
  }

  async function addCompletedCase({
    id,
    startTime,
    endTime,
    hintsUsed,
    averageAttempts,
  }: CompletedCase): Promise<void> {
    try {
      const completedCases =
        (await AsyncStorage.getItem("completedCases")) ?? "[]";
      const parsedCases: CompletedCase[] = JSON.parse(completedCases);

      if (parsedCases?.some((c) => c.id === id)) return;

      const updatedCases = JSON.stringify([
        ...parsedCases,
        {
          id,
          startTime,
          endTime,
          hintsUsed,
          averageAttempts,
        },
      ]);
      await AsyncStorage.setItem("completedCases", updatedCases);
    } catch (error) {
      console.error("Failed to add the completed case", error);
    }
  }

  async function deleteCompletedCase(caseId: string) {
    try {
      const completedCases = await getCompletedCases();
      const updatedCases =
        JSON.stringify(completedCases.filter((c) => c.id !== caseId)) ?? "[]";
      await AsyncStorage.setItem("completedCases", updatedCases);
    } catch (error) {
      console.error("Failed to delete the completed case", error);
    }
  }

  return {
    getCompletedCases,
    addCompletedCase,
    deleteCompletedCase,
  };
}
