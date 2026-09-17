import Case from "@/interfaces/Case";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import DifficultyBadge from "./DifficultyBadge";

const CaseCard = ({
  id,
  title,
  caseNo,
  description,
  difficulty,
}: Partial<Case>) => {
  return (
    <Pressable
      onPress={() =>
        router.push({ pathname: "/SolveCase", params: { caseId: id } })
      }
      className="bg-card px-6 py-2 h-32 rounded-md border border-border transition-all ease-in duration-200 active:scale-[0.98]"
    >
      <View className="flex-row items-center justify-between">
        <Text className="text-foreground font-jakarta-medium">
          #{caseNo?.toString().padStart(3, "0")} {title}
        </Text>

        {difficulty && <DifficultyBadge difficulty={difficulty} />}
      </View>

      <Text numberOfLines={3} className="text-base text-muted-foreground mt-2">
        {description}
      </Text>
    </Pressable>
  );
};

export default CaseCard;
