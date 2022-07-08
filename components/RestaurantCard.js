import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LocationMarkerIcon, StarIcon } from "react-native-heroicons/outline";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  shortDescription,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 px-1 rounded-lg py-2 shadow-2xl">
      <Image
        source={{ uri: imgUrl }}
        className="h-36 w-64 rounded-lg shadow-xl"
      />
      <View className="px-3 pb-4 flex space-y-1 items-start">
        <Text className="font-bold text-lg px-1 pt-2">{title}</Text>
        <View className="flex-row items-center space-x-2">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            {" "}
            <Text className="text-black">{rating}</Text> . {genre}
          </Text>
        </View>
        <View className="flex-row items-center">
            <LocationMarkerIcon color="gray" opacity={0.4} size={22}/>
            <Text className='text-xs text-gray-500'>Nearby . {address}</Text>

        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
