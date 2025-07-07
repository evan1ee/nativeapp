import { Button, ButtonText } from "@/components/ui/button";
import { Text, View } from "react-native";


export default function HomeScreen() {
  return (
   <View className='flex-1 justify-center items-center bg-white'>
    <Text>Hello World</Text>
    <Button size="md" variant="solid" action="primary">
      <ButtonText>Hello World!</ButtonText>
    </Button>
   </View>
  );
}
