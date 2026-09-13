import Case from "@/interfaces/Case";
import { Pressable, Text, View } from "react-native";

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

  const styles = difficultyStyles[difficulty!];

  return (
    <Pressable className="bg-card px-6 py-2 h-32 rounded-md border border-border transition-all ease-in duration-200 active:scale-[0.98]">
      <View className="flex-row items-center justify-between">
        <Text className="text-foreground font-jakarta-medium">
          #{caseNo?.toString().padStart(3, "0")} {title}
        </Text>

        <View
          className={`w-20 ${styles.background} border ${styles.border} py-0.5 rounded-full`}
        >
          <Text
            className={`${styles.text} text-sm font-jakarta-semibold uppercase tracking-wide text-center`}
          >
            {difficulty}
          </Text>
        </View>
      </View>

      <Text numberOfLines={3} className="text-base text-muted-foreground mt-2">
        {description}
      </Text>
    </Pressable>
  );
};

export default CaseCard;
