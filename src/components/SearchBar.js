import React from 'react';
import {View ,TextInput , StyleSheet} from 'react-native'; 
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term,onTermChange,onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" size={30} style={styles.iconStyle}/>
            <TextInput
            autoCapitalize="none"
            autoCorrect={false} 
            style={styles.inputStyle} 
            placeholder="search"
            value={term}
            onChangeText={(newValue)=>{
                onTermChange(newValue)}
             }
            //  same as 
             //onChangeText={onTermChange}
             onEndEditing={()=>onTermSubmit()}
             //same as 
             //onEndEditing={onTermSubmit}
             />
        </View>
    )
}
const styles= StyleSheet.create({
      backgroundStyle:{
          backgroundColor:'#d8d8d8',
          height: 50 ,
          borderRadius:5,
          marginHorizontal:15,
          flexDirection:"row",
          marginTop:10
        },
        inputStyle:{
            flex:1,
            fontSize:18
        },
        iconStyle:{
            fontSize:35,
            alignSelf:'center',
            marginHorizontal:15
        }
})
export default SearchBar;