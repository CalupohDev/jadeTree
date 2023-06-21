import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Button from '@components/Buttons/Button'
import auth from '@react-native-firebase/auth'

const Feed = (props: any) => {
  const user = auth().currentUser;
  console.log(user)

  useEffect(() => {
    if(!user?.displayName) {
      auth().currentUser?.updateProfile({
        displayName: 'Test User'
      })
    }
  }, [])
  
  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!')
        props.setIsSignedIn(false)
      })
  }
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          marginBottom: 20,
          color: 'black'
        }}>{user?.displayName}</Text>
      <Button text="Sign Out" onPress={signOut} />
    </View>
  )
}

export default Feed

const styles = StyleSheet.create({})