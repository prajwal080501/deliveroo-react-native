import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className=" bg-white pt-14">
      <View className=" flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="text-blue-500 font-bold text-xs">Deliver Now</Text>
          <Text className=" font-bold text-xl ">
            Current Location
            <ChevronDownIcon size={20} color="#000" />
          </Text>
        </View>
        <UserIcon size={30} color="#0A84FF" />
      </View>
      <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
        <View className="flex-row flex-1 items-center space-x-2 rounded-xl shadow-md bg-gray-200 p-3">
          <SearchIcon color="gray" size={20} />
          <TextInput
            className=""
            placeholder="Restaurants and Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon color="#0A84FF" />
      </View>
      <ScrollView className="bg-gray-100">
        <Categories />
        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
        <FeaturedRow
          id="1234"
          title="Tasty Discounts"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
        <FeaturedRow
          id="12345"
          title="Offers Near You"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
