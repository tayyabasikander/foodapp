import React, {useState} from 'react';
import {View ,Text , StyleSheet} from 'react-native'; 
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp' ;

const SearchScreen = () => {
    const [term,setTerm] = useState('')
    const [results,setResults] = useState([])
    return (
        <View>

            <SearchBar
            term = {term} 
            onTermChange={newValue => { 
                setTerm(newValue) 
            }}
            onTermSubmit={()=>console.log('term was submitted')}
            />
            <Text>Search Screen</Text>
            <Text>{term}</Text>
        </View>
    )
}
const styles= StyleSheet.create({
      
})
export default SearchScreen;