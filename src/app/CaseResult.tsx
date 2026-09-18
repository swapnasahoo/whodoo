import { Text, View } from "react-native";

type CaseResultProps = {
  startTime: number;
  endTime: number;
  hintsUsed: number;
  averageAttempts: number;
};

const CaseResult = ({
  startTime,
  endTime,
  hintsUsed,
  averageAttempts,
}: CaseResultProps) => {
  const duration = endTime - startTime;
  const formattedDuration = (duration / 1000).toFixed(2) + "s";

  return (
    <View>
      <Text className="text-foreground">CaseResult</Text>
    </View>
  );
};

export default CaseResult;
