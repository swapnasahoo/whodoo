import HintModal from "@/components/HintModal";
import { mockCases } from "@/data/cases";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as Haptics from "expo-haptics";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CaseStepView from "./CaseStepView";
import DifficultyBadge from "@/components/DifficultyBadge";
import useStorage from "@/hooks/useStorage";

const SolveCase = () => {
  const { caseId } = useLocalSearchParams<{ caseId: string }>();
  const caseDetails = mockCases.find((c) => c.id === caseId);

  const { addCompletedCase } = useStorage();

  const [stepNo, setStepNo] = useState<number>(0);
  const step = caseDetails?.steps[stepNo - 1];
  const isLastStep: boolean = caseDetails?.steps.length === stepNo;
  const [answerFound, setAnswerFound] = useState<boolean>(false);
  const [wrongOption, setWrongOption] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [completedSteps, setCompletedSteps] = useState<
    {
      stepNo: number;
      correctOption: number;
      selectedOption: number | null;
    }[]
  >([]);
  const [attempt, setAttempt] = useState<number>(0);
  const [isHintModalVisible, setIsHintModalVisible] = useState<boolean>(false);

  if (!caseDetails) return;

  const renderStep = () => {
    if (stepNo === 0) {
      return (
        <View className="gap-3">
          <View>
            <Text className="text-foreground text-lg font-jakarta-bold tracking-wide ml-2">
              Case Briefing
            </Text>

            <View className="w-1 h-full absolute bg-primary rounded-full" />
          </View>

          <View className="bg-card w-full h-max rounded-md border border-border px-3 py-4 gap-3">
            <View>
              <Text className="text-muted-foreground text-[15px] font-jakarta-medium tracking-wide leading-5 ml-4">
                {caseDetails.introduction}
              </Text>

              <View className="w-0.5 h-full absolute bg-primary rounded-full" />
            </View>
          </View>
        </View>
      );
    } else if (stepNo > 0) {
      return (
        <CaseStepView
          step={step}
          answerFound={answerFound}
          wrongOption={wrongOption}
          onOptionPress={handleOnOptionPress}
        />
      );
    }
  };

  function handleOnOptionPress(index: number) {
    const isCorrectOption = step?.correctOption === index;
    setSelectedOption(index);

    if (!isCorrectOption) {
      setWrongOption(index);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }

    // handling hint and answer
    const nextAttempt = attempt + 1;
    setAttempt(nextAttempt);
    if (nextAttempt === 1 && !isCorrectOption && step?.hint) {
      setIsHintModalVisible(true);
      return;
    }

    setAnswerFound(true);
    step &&
      setCompletedSteps((prev) => [
        ...prev,
        {
          stepNo: step.stepNo,
          correctOption: step?.correctOption,
          selectedOption: index,
        },
      ]);
  }

  function restoreStep(stepNo: number) {
    const completedStep = completedSteps.find((step) => step.stepNo === stepNo);

    if (completedStep) {
      setAnswerFound(true);
      setSelectedOption(completedStep.selectedOption);

      if (completedStep.selectedOption !== completedStep.correctOption) {
        setWrongOption(completedStep.selectedOption);
      } else {
        setWrongOption(null);
      }
    } else {
      setAnswerFound(false);
      setSelectedOption(null);
      setWrongOption(null);
    }
  }

  async function handleContinue(): Promise<void> {
    const nextStepNo = stepNo + 1;

    if (isLastStep) {
      await addCompletedCase({ caseId });
      router.replace("/");
      return;
    }

    setStepNo(nextStepNo);
    setAttempt(0);
    restoreStep(nextStepNo);
  }

  function handleBack(): void {
    if (stepNo > 0) {
      const prevStepNo = stepNo - 1;

      setStepNo(prevStepNo);
      restoreStep(prevStepNo);
    }
  }

  return (
    <View className="flex-1 bg-background px-6 py-4">
      <SafeAreaView style={{ flex: 1 }}>
        {/* HEADER */}
        <View className="gap-1">
          <View className="flex-row items-center justify-between">
            <Text className="text-muted-foreground text-lg font-jakarta-semibold">
              #{caseDetails.caseNo.toString().padStart(3, "0")}
            </Text>

            <View className="flex-row items-center gap-2">
              <DifficultyBadge difficulty={caseDetails.difficulty} />

              {step?.hint && (
                <Pressable
                  onPress={() => {
                    setIsHintModalVisible(true);
                    setAttempt(attempt + 1);
                  }}
                >
                  <MaterialCommunityIcons
                    name="lightbulb-on"
                    size={18}
                    className="text-amber-400"
                  />
                </Pressable>
              )}
            </View>
          </View>

          <Text className="text-3xl font-jakarta-extrabold text-foreground tracking-wide">
            {caseDetails.title}
          </Text>
        </View>

        {/* CONTENT */}
        <ScrollView style={{ flex: 1, marginTop: 16 }}>
          {renderStep()}

          {answerFound && (
            <View className="mt-4">
              <View
                className={`w-full min-h-32 h-max p-4 border border-b-6 ${wrongOption === null ? "bg-success/15 border-success/15 border-b-success/20" : "bg-destructive/15 border border-destructive/15 border-b-destructive/20"} rounded-xl`}
              >
                <Text
                  className={`text-sm uppercase tracking-widest ${wrongOption === null ? "text-success" : "text-destructive"} font-jakarta-bold`}
                >
                  {wrongOption === null ? "Spot on!" : "Think more!"}
                </Text>

                <View className="gap-2 mt-2">
                  <Text className="text-foreground text-lg font-jakarta-medium">
                    {step?.response}
                  </Text>
                  <View className="w-full h-px rounded-full bg-success/15" />
                  <Text className="text-muted-foreground text-base font-jakarta-medium">
                    {step?.explanation}
                  </Text>
                </View>
              </View>
            </View>
          )}
        </ScrollView>

        {answerFound || stepNo === 0 ? (
          <View className="flex-row items-baseline gap-2">
            {stepNo > 0 && (
              <Pressable
                onPress={handleBack}
                onPressIn={() =>
                  Haptics.performAndroidHapticsAsync(
                    Haptics.AndroidHaptics.Context_Click,
                  )
                }
                className="w-15 h-16 items-center justify-center border-3 border-b-6 border-border rounded-xl transition-all duration-200 ease-out active:scale-[0.98] active:translate-y-1 active:border-b-3"
              >
                <Ionicons
                  name="chevron-back-sharp"
                  size={20}
                  className="text-muted-foreground"
                />
              </Pressable>
            )}

            <Pressable
              onPress={handleContinue}
              onPressIn={() =>
                Haptics.performAndroidHapticsAsync(
                  Haptics.AndroidHaptics.Context_Click,
                )
              }
              className={`flex-1 h-16 items-center justify-center mb-4 rounded-xl border-b-6 ${wrongOption === null ? "bg-violet-700 border-b-violet-950/40" : "bg-destructive border-b-red-950/40"} transition-all duration-200 ease-out active:scale-[0.98] active:border-b-transparent active:translate-y-1`}
            >
              <Text className="text-xl text-foreground font-jakarta-bold">
                {isLastStep ? "FINISH" : "CONTINUE"}
              </Text>
            </Pressable>
          </View>
        ) : (
          ""
        )}
      </SafeAreaView>

      <HintModal
        hint={step?.hint || ""}
        isVisible={isHintModalVisible}
        onClose={() => setIsHintModalVisible(false)}
      />
    </View>
  );
};

export default SolveCase;
