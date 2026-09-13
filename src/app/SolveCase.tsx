import { mockCases } from "@/data/cases";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SolveCase = () => {
  const { caseId } = useLocalSearchParams<{ caseId: string }>();
  const caseDetails = mockCases.find((c) => c.id === caseId);

  const [stepNo, setStepNo] = useState<number>(0);
  const step = caseDetails?.steps[stepNo - 1];
  const isLastStep: boolean = caseDetails?.steps.length === stepNo;
  const [answerFound, setAnswerFound] = useState<boolean>(false);

  if (!caseDetails) return;

  const difficultyStyles = {
    Easy: {
      background: "bg-success/20",
      border: "border-success/40",
      text: "text-success",
    },
    Medium: {
      background: "bg-warning/20",
      border: "border-warning/40",
      text: "text-warning",
    },
    Hard: {
      background: "bg-destructive/20",
      border: "border-destructive/40",
      text: "text-destructive",
    },
  };

  const styles = difficultyStyles[caseDetails.difficulty];

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
        <View className="gap-3">
          <View>
            <Text className="text-foreground text-lg ml-2 font-jakarta-semibold">
              {step?.title}
            </Text>

            <View className="w-1 h-full bg-primary absolute rounded-full" />
          </View>

          <View>
            <Text className="text-foreground text-2xl font-jakarta-bold">
              {step?.question}
            </Text>

            {step?.options.map((option, index) => {
              const isCorrectOption =
                option === step.options[step.correctOption];

              return (
                <Pressable
                  key={index}
                  onPress={() =>
                    option === step.options[step.correctOption] &&
                    setAnswerFound(true)
                  }
                  disabled={answerFound}
                  className={`w-full h-20 mt-3 flex-row items-center gap-3 border border-b-6 ${answerFound && isCorrectOption ? "bg-success/15 border-success/20 border-b-success/15" : "bg-card border-b-border/40 border-border"} px-6 rounded-xl transition-all ease-out duration-200 active:scale-[0.98] active:translate-y-1 active:border-0 active:border-b-0`}
                >
                  <View
                    className={`size-10 items-center justify-center rounded-full border ${answerFound && isCorrectOption ? "border-success/20" : "border-border"}`}
                  >
                    <Text className="text-foreground font-jakarta-semibold -translate-y-px">
                      {String.fromCharCode(65 + index)}
                    </Text>
                  </View>

                  <Text className="flex-1 text-foreground text-lg font-jakarta-semibold">
                    {option}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      );
    }
  };

  function handleContinue(): void {
    setStepNo(stepNo + 1);
    setAnswerFound(false);
    isLastStep && router.replace("/");
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

            <View
              className={`w-20 ${styles.background} border ${styles.border} py-0.5 rounded-full`}
            >
              <Text
                className={`${styles.text} text-sm font-jakarta-semibold uppercase tracking-wide text-center`}
              >
                {caseDetails.difficulty}
              </Text>
            </View>
          </View>

          <Text className="text-3xl font-jakarta-extrabold text-foreground tracking-wide">
            {caseDetails.title}
          </Text>
        </View>

        {/* CONTENT */}
        <ScrollView style={{ flex: 1, marginTop: 16 }}>
          {renderStep()}
        </ScrollView>

        {answerFound || stepNo === 0 ? (
          <Pressable
            onPress={handleContinue}
            className="bg-violet-700 w-full h-16 items-center justify-center mb-4 rounded-xl border-b-6 border-b-violet-950/40 transition-all duration-200 ease-out active:scale-[0.98] active:border-b-transparent active:translate-y-1"
          >
            <Text className="text-xl text-foreground font-jakarta-bold">
              {isLastStep ? "FINISH" : "CONTINUE"}
            </Text>
          </Pressable>
        ) : (
          ""
        )}
      </SafeAreaView>
    </View>
  );
};

export default SolveCase;
