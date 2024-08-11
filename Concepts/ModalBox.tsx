
import React, { useState } from 'react'
import { Button, Modal, StyleSheet, View, Text } from 'react-native'
const ModalBox = () => {

  const [showmodalBox,setShowModalBox]=useState(true)
  return (
    <View style={{flex:1}}>

     <Modal
     transparent={true}
     visible={showmodalBox}>
        <View style={styles.ModelBox}>
          <View style={styles.centered}>

       
          <Text>Dialogue box is open</Text>
          <Button title='close modalbox' onPress={()=>setShowModalBox(false)}></Button>
          </View></View>
      </Modal>
      
      <View style={styles.ButtonView}>
        <Button title='open Model box' onPress={()=>setShowModalBox(true)}></Button>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  ButtonView: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  ModelBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  centered:{
    backgroundColor:'skyblue',
    padding:20
  }

})

export default ModalBox
