import Case from "@/interfaces/Case";
import { Text, View } from "react-native";

type DifficultyBadgeProps = Pick<Case, "difficulty">;

const DifficultyBadge = ({ difficulty }: DifficultyBadgeProps) => {
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

  const styles = difficultyStyles[difficulty];
  return (
    <View
      className={`w-20 ${styles.background} border ${styles.border} py-0.5 rounded-full`}
    >
      <Text
        className={`${styles.text} text-sm font-jakarta-semibold uppercase tracking-wide text-center`}
      >
        {difficulty}
      </Text>
    </View>
  );
};

export default DifficultyBadge;
