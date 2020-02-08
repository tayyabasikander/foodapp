import React, { useState } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    //console.log("props are", props);
    const [term, setTerm] = useState('')
    const [ searchApi , results , errorMessage ] = useResults();
    //console.log(results);

    const filterResultsByPrice = (price) => {
        //price ==='$' || '$$' || '$$$'
        return results.filter(i=>{
            return i.price === price;
        });
    };

    return (
        < >
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ?  <Text> {errorMessage} </Text> : null }   
            {/* <Text style={{marginLeft:15}}>We have found {results.length} results</Text> */}
            <ScrollView>
            <ResultsList results={filterResultsByPrice('$')} title="Cost effective"/>
            <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
            <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender"/>
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({


})
export default SearchScreen;