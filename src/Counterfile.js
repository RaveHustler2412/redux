import React from 'react';
import { TouchableOpacity,StyleSheet,View,Text} from 'react-native';
import {connect} from 'react-redux'

console.log('fuck')
function Counterfile(props,value) {
    return (
        <View style={styles.containerouter}>  
 
        <View style={styles.containerinner}>  
        <TouchableOpacity style={styles.decreasetouchable} onPress={()=>props.Decrease()}>
        <Text>decrease</Text>
        </TouchableOpacity>
  
        <Text>{props.counter}</Text>
        <TouchableOpacity style={styles.increasetouchable}  onPress={()=>props.Increase()}>
        <Text>increase</Text>
  
        </TouchableOpacity>
        </View>


        <View style={styles.containerinner}>  
        <TouchableOpacity style={styles.decreasetouchable} onPress={()=>props.Decrease2()}>
        <Text>decrease</Text>
        </TouchableOpacity>
  
        <Text>{props.counter2}</Text>
        <TouchableOpacity style={styles.increasetouchable}  onPress={()=>props.Increase2()}>
        <Text>increase</Text>
  
        </TouchableOpacity>
        </View>

      </View>
        
    );
}

const mapStateToProps = (state) => {
    // console.log("data from state")
    return {
        counter:state.counter,
        counter2:state.counter2
    }
  
}

const mapDispatchToProps = (dispatch) => {
    return {
        Increase: () => {
            dispatch({type:"INCREASE_COUNTER"})
            // console.log("increase data to reducer")
        },
        Decrease: () => {
            dispatch({type:"DECREASE_COUNTER"})
            
        },
        Increase2: () => {
            dispatch({type:"INCREASE_COUNTER2"})
            
        },
        Decrease2: () => {
            dispatch({type:"DECREASE_COUNTER2"})
            
        }
    }
}
const styles = StyleSheet.create({
    containerinner:{
        flex:1,
         alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row'
    
      },
      containerouter:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'column'
    
      },
      decreasetouchable:{
          backgroundColor:'red',
          padding:10,margin:10},

    increasetouchable:{
            backgroundColor:'green',
            padding:10,margin:10}
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Counterfile)