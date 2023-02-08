import React from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import ArtFairs from './ArtFairs'
import KeithHaringList from './KeithHaringList'

const Artist = () => (
<ScrollView style={styles.artist} showsVerticalScrollIndicator={false}>
<Text style={styles.recommendation}>{item.recommendation}</Text>
<ArtFairs item={item.art_fairs}/>
<Text style={styles.keith_haring}>{item.keith_haring}</Text>
<KeithHaringList item={item.keith_haring_list}/>
<Text style={styles.catchy_line}>{item.catchy_line}</Text>
</ScrollView>
)

export default Artist;

const styles = StyleSheet.create({
    'recommendation': {
        'fontSize': 28,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'keith_haring': {
        'fontSize': 28,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'catchy_line': {
        'fontSize': 12,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});