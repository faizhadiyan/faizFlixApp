import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Home = ({ navigation }: { navigation: any }): JSX.Element => {
  return (
    // <View>
    //
    // </View>
    <View style={styles.container}>
      <Button
        title="Pergi ke Movie Detail"
        onPress={() => {
          navigation.navigate('MovieDetail')
        }}
      />
      <Text>Home SOS</Text>
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

export default Home
