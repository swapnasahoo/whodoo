import Case from "@/interfaces/Case";
import { Text, View } from "react-native";

const CaseCard = ({
  title,
  caseNo,
  description,
  difficulty,
}: Partial<Case>) => {
  const difficultyStyles = {
    Easy: {
      background: "bg-success/20",
      border: "border-success/40",
    },
    Medium: {
      background: "bg-warning/20",
      border: "border-warning/40",
    },
    Hard: {
      background: "bg-destructive/20",
      border: "border-destructive/40",
    },
  };

  const styles = difficultyStyles[difficulty!];

  return (
    <View className="bg-card px-6 py-2 rounded-md">
      <View className="flex-row items-center justify-between">
        <Text className="text-foreground font-jakarta-medium">
          #{caseNo?.toString().padStart(3, "0")} {title}
        </Text>

        <View
          className={`w-20 ${styles.background} border ${styles.border} py-0.5 rounded-full`}
        >
          <Text className="text-foreground text-sm font-jakarta-semibold uppercase text-center">
            {difficulty}
          </Text>
        </View>
      </View>

      <Text numberOfLines={4} className="text-base text-muted-foreground mt-2">
        {description}
      </Text>
    </View>
  );
};

export default CaseCard;
