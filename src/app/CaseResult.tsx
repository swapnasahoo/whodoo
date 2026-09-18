import formatTime from "@/utils/formatTime";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";

type CaseResultProps = {
  startTime: number;
  endTime: number;
  hintsUsed: number;
  averageAttempts: number;
};

type StatCardProps = {
  label: string;
  value: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const StatCard = ({ label, value, icon }: StatCardProps) => {
  return (
    <View
      key={label}
      className="flex-1 min-h-28 bg-card border border-border border-b-4 rounded-xl items-center justify-center gap-1 px-2 py-3"
    >
      <Ionicons name={icon} size={18} className="text-primary" />
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        className="text-foreground text-lg font-jakarta-bold"
      >
        {value}
      </Text>
      <Text className="text-muted-foreground text-[11px] font-jakarta-semibold uppercase tracking-widest">
        {label}
      </Text>
    </View>
  );
};

const CaseResult = ({
  startTime,
  endTime,
  hintsUsed,
  averageAttempts,
}: CaseResultProps) => {
  const duration = endTime - startTime;
  const formattedDuration = formatTime(duration);

  const timeLabel =
    duration / 1000 < 120 ? "Flash" : duration / 1000 < 300 ? "Quick" : "Brisk";

  const stats = [
    { label: "Hints", value: String(hintsUsed), icon: "bulb-outline" as const },
    {
      label: "Attempts",
      value: String(averageAttempts),
      icon: "refresh-outline" as const,
    },
    {
      label: timeLabel,
      value: formattedDuration,
      icon: "time-outline" as const,
    },
  ];

  return (
    <View className="gap-4">
      <View className="items-center gap-1 pt-2">
        <View className="size-14 items-center justify-center rounded-full bg-success/15 border border-success/20">
          <Ionicons name="checkmark-sharp" size={28} className="text-success" />
        </View>
        <Text className="text-foreground text-2xl font-jakarta-extrabold tracking-wide mt-1">
          Case Closed
        </Text>
        <Text className="text-muted-foreground text-sm font-jakarta-medium">
          Here's how you did
        </Text>
      </View>

      <View className="flex-row items-stretch gap-3">
        {stats.map((s) => (
          <StatCard
            key={s.label}
            label={s.label}
            value={s.value}
            icon={s.icon}
          />
        ))}
      </View>
    </View>
  );
};

export default CaseResult;
