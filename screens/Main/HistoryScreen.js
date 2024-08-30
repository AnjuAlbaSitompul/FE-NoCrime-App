import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useCallback } from 'react'
import { COLORS } from '../../constants/appearance'
import { kriminalStore } from '../../store/kriminalStore'
import KriminalItem from '../../component/scroll-item/KriminalItem'

const HistoryScreen = () => {
  const dataKriminal = kriminalStore((state) => state.kriminal)

  const renderHandler = useCallback(({ item, index }) => (
    <KriminalItem item={item} />
  ), [])

  // const headerRenderHandler = useCallback(()=> (

  // ))

  return (
    <View style={styles.root}>
      {dataKriminal.length >= 1 ?

        <FlatList
          data={dataKriminal}
          // ListHeaderComponent={headerRenderHandler}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderHandler}
          ItemSeparatorComponent={() => <View style={{ height: 2, backgroundColor: COLORS.background }} />}
        />
        :
        <View style={styles.noDataContainer}>
          <Text style={styles.highlightText}>Tidak Ada Data Kriminal</Text>
        </View>

      }
    </View>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.background,
    flex: 1
  },
  noDataContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  highlightText: {
    color: 'grey'
  }
})