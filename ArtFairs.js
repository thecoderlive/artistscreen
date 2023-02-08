import React from 'react'
import { Image, View, FlatList, StyleSheet } from 'react-native'



const artFairsItem = ({ item }) => (
<View style={styles.art_fairs_item}>
<Image
    style={styles.art_fair}
    source={{uri: item.art_fair}}
    />
</View>
  );

const ArtFairs = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.art_fairs}
    data={item}
    renderItem={artFairsItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default ArtFairs;

const styles = StyleSheet.create({
    'art_fair': {
        'width': '23.5vw',
        'height': '23.5vw',
        'borderRadius': 50,
        'marginHorizontal': 6,
        'marginVertical': 2
    }
});