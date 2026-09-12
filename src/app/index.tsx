import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CaseCard from "../components/CaseCard";

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
          <CaseCard />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
