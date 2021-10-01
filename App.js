import { coverage } from 'browserslist';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList,
  Image,
  Dimensions,
  Animated
} from 'react-native';
import BottomSheet, {BottomSheetScrollView} from "react-native-gesture-bottom-sheet";


const {width, height} = Dimensions.get('window');
const WIDTH_ITEM = width ;
const HEIGHT_ITEM = height *.80;
const WIDTH_NODE = 6;
const WIDTH_NODE_INDICATOR = 12;


export default function App() {

  const scrolly =  React.useRef(new Animated.Value(0)).current;

  const data =  [
    {id: 1, 
      uri: 'https://images.asos-media.com/products/valentino-by-mario-valentino-divina-sac-bandouliere-a-rabat-avec-pampilles-blanc/14399152-1-white?$n_640w$&wid=513&fit=constrain', 
      title: 'Valentino by Mario Valentino', 
      disc: 'Tradition in a contemporary image. Luxury, Art and History of the Made in Italy. · SHOES · WOMENSWEAR · LEATHER GOODS · SILK ACCESSORIES.', 
      pric: ' 71,20 €' 
    },
    {id: 2, 
      uri: 'https://images.asos-media.com/products/valentino-by-mario-valentino-divina-sac-bandouliere-a-rabat-avec-pampilles-blanc/14399152-2?$n_640w$&wid=513&fit=constrain', 
      title: 'Valentino by Mario Valentino',
       disc: 'Tradition in a contemporary image. Luxury, Art and History of the Made in Italy. · SHOES · WOMENSWEAR · LEATHER GOODS · SILK ACCESSORIES.', 
       pric: ' 71,20 €' 
      },
    {id: 3, 
      uri: 'https://images.asos-media.com/products/valentino-by-mario-valentino-divina-sac-bandouliere-a-rabat-avec-pampilles-blanc/14399152-3?$n_640w$&wid=513&fit=constrain', 
      title: 'Valentino by Mario Valentino', 
      disc: 'Tradition in a contemporary image. Luxury, Art and History of the Made in Italy. · SHOES · WOMENSWEAR · LEATHER GOODS · SILK ACCESSORIES.', 
      pric: ' 71,20 €' 
    },
    {id: 4, 
      uri: 'https://images.asos-media.com/products/valentino-by-mario-valentino-divina-sac-bandouliere-a-rabat-avec-pampilles-blanc/14399152-4?$n_640w$&wid=513&fit=constrain', 
      title: 'Valentino by Mario Valentino',
       disc: 'Tradition in a contemporary image. Luxury, Art and History of the Made in Italy. · SHOES · WOMENSWEAR · LEATHER GOODS · SILK ACCESSORIES.', 
       pric: ' 71,20 €' 
      },
  ];


  return (
    <View style={styles.container}>
      <View style={{ width, height: HEIGHT_ITEM, overflow: 'hidden' }}>
      <Animated.FlatList 
      data={data}
      keyExtractor={(_, index) => index.toString()}
      snapToInterval={HEIGHT_ITEM}
      decelerationRate={'fast'}
      showsVerticalScrollIndicato={false}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset : { y : scrolly}}}],
        {useNativeDriver: true}
      )}
      renderItem={({item}) => {
        return(
          <View>
            <Image 
            source={{ uri : item.uri}}
            style={styles.images}
            />
          </View>
        )
      }}
      />
      </View>
      <View style={styles.pagination}>
        {data.map((_, index) => {
          return(
            <View 
            key={(_, index) => index.toString()}
            style={styles.node} />
          )
        })}
      </View>
      <Animated.View 
      style={[styles.dote_indicator, {transform: [
        {translateY: Animated.divide(scrolly, HEIGHT_ITEM).interpolate({
          inputRange: [0, 1],
          outputRange: [0, WIDTH_NODE_INDICATOR*1.33]
        })}
      ]}]}
      />
      <BottomSheet>
        <BottomSheetScrollView>
          <Text>sgqhsghjqgdhsbxbjk</Text>
        </BottomSheetScrollView>
      </BottomSheet>
      <StatusBar style="hidden" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  images: {
    width: WIDTH_ITEM,
    height: HEIGHT_ITEM,
    resizeMode: 'cover'
  },
  node: {
    width: WIDTH_NODE,
    height: WIDTH_NODE,
    borderRadius: 10,
    backgroundColor: '#000',
    marginBottom: 10
  },
  pagination: {
    position: 'absolute',
    top: HEIGHT_ITEM / 2,
    left: 10, 
    
  },
  dote_indicator: {
    width: WIDTH_NODE_INDICATOR,
    height: WIDTH_NODE_INDICATOR,
    borderRadius: 50,
    borderWidth: 1, 
    borderColor: '#000',
    position: 'absolute',
    top: HEIGHT_ITEM / 2 -3,
    left : 7
  }

});
