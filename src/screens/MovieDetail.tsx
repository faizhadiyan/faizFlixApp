import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const MovieDetail = ({ navigation }: { navigation: any }): JSX.Element => {
  return (
    // <View>
    //
    // </View>
    <View style={styles.container}>
      <Button
        title="Pergi ke Home"
        onPress={() => {
          navigation.navigate('Home')
        }}
      />

      <Text>Progate</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginVertical20: {
    marginVertical: 20,
  },
})

export default MovieDetail
