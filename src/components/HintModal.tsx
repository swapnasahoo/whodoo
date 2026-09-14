import { Modal, Pressable, Text } from "react-native";

type HintModalProps = {
  hint: string;
  isVisible: boolean;
  onClose: () => void;
};

const HintModal = ({ hint, isVisible, onClose }: HintModalProps) => {
  return (
    <Modal
      visible={isVisible}
      onRequestClose={onClose}
      transparent
      animationType="fade"
    >
      <Pressable
        onPress={onClose}
        className="flex-1 items-center justify-center"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <Pressable
          onPress={(e) => e.stopPropagation()}
          className="w-[80%] min-h-60 bg-background  px-6 pt-6 pb-4 flex-col gap-1 border border-b-6 border-border border-b-border/40 rounded-xl"
        >
          <Text className="text-muted-foreground text-sm font-jakarta-bold uppercase tracking-widest">
            Hint time!
          </Text>

          <Text className="text-foreground text-lg font-jakarta-semibold">
            {hint}
          </Text>

          <Pressable
            onPress={onClose}
            className="w-full h-16 mt-auto bg-violet-700 items-center justify-center border-b-6 border-b-violet-950/40 rounded-xl transition-all ease-out duration-200 active:scale-[0.98] active:border-b-0 active:translate-y-1"
          >
            <Text className="text-foreground text-xl font-jakarta-bold">
              GOT IT
            </Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default HintModal;
