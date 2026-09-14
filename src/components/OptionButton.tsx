import { Pressable, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";

const OptionButton = ({
  index,
  answerFound,
  option,
  isCorrectOption,
  isWrongOption,
  onPress,
}: {
  index: number;
  answerFound: boolean;
  option: string;
  isCorrectOption: boolean;
  isWrongOption: boolean;
  onPress: () => void;
}) => {
  const translateX = useSharedValue(0);

  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const press = Gesture.Tap().onEnd(() => {
    if (answerFound || isCorrectOption) return;

    translateX.value = withSequence(
      withTiming(10, { duration: 40 }),
      withTiming(-10, { duration: 40 }),
      withTiming(10, { duration: 40 }),
      withTiming(-10, { duration: 40 }),
      withTiming(0, { duration: 40 }),
    );
  });

  return (
    <GestureDetector gesture={press}>
      <AnimatedPressable
        onPress={onPress}
        disabled={answerFound}
        style={animatedStyles}
        className={`w-full min-h-20 max-h-max py-2 mt-3 flex-row items-center gap-3 border border-b-6 ${
          answerFound && isCorrectOption
            ? "bg-success/15 border-success/20 border-b-success/15"
            : answerFound && isWrongOption
              ? "bg-destructive/15 border-destructive/20 border-b-destructive/15"
              : "bg-card border-b-border/40 border-border"
        } px-6 rounded-xl transition-all ease-out duration-200 active:scale-[0.98] active:translate-y-1 active:border-0 active:border-b-0`}
      >
        <View
          className={`size-10 items-center justify-center rounded-full border ${answerFound && isCorrectOption ? "border-success/20" : isWrongOption ? "border-destructive/20" : "border-border"}`}
        >
          <Text className="text-foreground font-jakarta-semibold -translate-y-px">
            {String.fromCharCode(65 + index)}
          </Text>
        </View>

        <Text className="flex-1 text-foreground text-lg font-jakarta-semibold">
          {option}
        </Text>
      </AnimatedPressable>
    </GestureDetector>
  );
};

export default OptionButton;
