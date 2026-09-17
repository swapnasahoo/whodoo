import Case from "@/interfaces/Case";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import DifficultyBadge from "./DifficultyBadge";
import Ionicons from "@expo/vector-icons/Ionicons";

type CaseCardProps = Pick<
  Case,
  "id" | "title" | "caseNo" | "description" | "difficulty"
> & {
  isCompleted: boolean;
  isPrevCompleted: boolean;
};

const CaseCard = ({
  id,
  title,
  caseNo,
  description,
  difficulty,
  isCompleted,
  isPrevCompleted,
}: CaseCardProps) => {
  return (
    <View>
      <Pressable
        onPress={() =>
          router.push({ pathname: "/SolveCase", params: { caseId: id } })
        }
        className={`bg-card px-6 py-2 h-32 rounded-md border border-border transition-all ease-in duration-200 active:scale-[0.98] ${isCompleted && "opacity-50"} ${!isPrevCompleted && "opacity-60"}`}
        disabled={isCompleted || !isPrevCompleted}
      >
        <View className="flex-row items-center justify-between">
          <Text className="text-foreground font-jakarta-medium">
            #{caseNo?.toString().padStart(3, "0")} {title}
          </Text>

          {difficulty && <DifficultyBadge difficulty={difficulty} />}
        </View>

        <Text
          numberOfLines={3}
          className="text-base text-muted-foreground mt-2"
        >
          {description}
        </Text>
      </Pressable>

      {!isPrevCompleted && (
        <View className="absolute inset-0 bg-card/85 px-6 py-2 h-32 rounded-md border border-border items-center justify-center">
          <View className="size-12 items-center justify-center bg-card/30 rounded-xl border border-border">
            <Ionicons
              name="lock-closed"
              size={22}
              className="text-muted-foreground"
            />
          </View>

          <Text className="text-sm text-muted-foreground mt-1 uppercase font-jakarta-bold tracking-widest">
            Locked
          </Text>
        </View>
      )}
    </View>
  );
};

export default CaseCard;
