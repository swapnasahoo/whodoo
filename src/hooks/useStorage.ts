import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useStorage() {
  async function getCompletedCases(): Promise<string[]> {
    try {
      const completedCases =
        (await AsyncStorage.getItem("completedCases")) ?? "[]";
      const parsedCases: string[] = JSON.parse(completedCases);
      return parsedCases;
    } catch (error) {
      console.error("Failed to get completed cases", error);
      return [];
    }
  }

  async function addCompletedCase({
    caseId,
  }: {
    caseId: string;
  }): Promise<void> {
    try {
      const completedCases =
        (await AsyncStorage.getItem("completedCases")) ?? "[]";
      const parsedCases: string[] = JSON.parse(completedCases);

      if (parsedCases?.includes(caseId)) return;

      const updatedCases = JSON.stringify([...parsedCases, caseId]);
      await AsyncStorage.setItem("completedCases", updatedCases);
    } catch (error) {
      console.error("Failed to add the completed case", error);
    }
  }

  return {
    getCompletedCases,
    addCompletedCase,
  };
}
