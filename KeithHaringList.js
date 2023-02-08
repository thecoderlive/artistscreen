import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const keithHaringListItem = ({ item }) => (
<View style={styles.keith_haring_list_item}>
<Image
    style={styles.pic}
    source={{uri: item.pic}}
    />
<Text style={styles.price}>{item.price}</Text>
<Text style={styles.name}>{item.name}</Text>
<Text style={styles.story}>{item.story}</Text>
<Text style={styles.about_keith_haring}>{item.about_keith_haring}</Text>
</View>
  );

const KeithHaringList = ({ item }) => (
<FlatList
    style={styles.keith_haring_list}
    data={item}
    renderItem={keithHaringListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default KeithHaringList;

const styles = StyleSheet.create({
    'pic': {
        'width': '40vw',
        'height': '60vw',
        'marginTop': 5
    },
    'price': {
        'color': '#0b0a0a',
        'fontSize': 13,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'name': {
        'color': '#3e3838',
        'fontSize': 16,
        'fontWeight': '500',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'story': {
        'fontSize': 12,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'fontStyle': 'italic'
    },
    'about_keith_haring': {
        'fontSize': 12,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});