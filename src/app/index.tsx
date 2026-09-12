import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <View className="flex-1 bg-background px-6 py-4">
      <SafeAreaView style={{ flex: 1 }}>
        {/* HEADER */}
        <View>
          <Text className="text-foreground font-jakarta-extrabold text-4xl tracking-wide">
            Whodoo
          </Text>
        </View>

        {/* CONTENT */}
        <ScrollView
          style={{ flex: 1, marginTop: 24 }}
          showsVerticalScrollIndicator={false}
        >
          <View className="bg-card px-6 py-2 rounded-md">
            <View className="flex-row items-center justify-between">
              <Text className="text-foreground font-jakarta-medium">
                #001 The Missing Phone
              </Text>

              <View className="w-20 bg-success/40 border border-success/40 py-0.5 rounded-full">
                <Text className="text-foreground text-sm font-jakarta-semibold uppercase text-center">
                  Easy
                </Text>
              </View>
            </View>

            <Text
              numberOfLines={4}
              className="text-base text-muted-foreground mt-2"
            >
              A beginner friendly challenge designed to test your skills without
              being too difficult. Perfect for warming up and getting
              comfortable with the basics.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
