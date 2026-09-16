import OptionButton from "@/components/OptionButton";
import { CaseStep } from "@/interfaces/Case";
import { Text, View } from "react-native";

type CaseStepViewProps = {
  step: CaseStep | undefined;
  answerFound: boolean;
  wrongOption: number | null;
  onOptionPress: (index: number) => void;
};

const CaseStepView = ({
  step,
  answerFound,
  wrongOption,
  onOptionPress,
}: CaseStepViewProps) => {
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
          const isCorrectOption = option === step.options[step.correctOption];

          return (
            <OptionButton
              key={index}
              index={index}
              answerFound={answerFound}
              isCorrectOption={isCorrectOption}
              isWrongOption={wrongOption === index}
              option={option}
              onPress={() => onOptionPress(index)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default CaseStepView;
