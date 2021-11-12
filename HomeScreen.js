import { StatusBar } from 'expo-status-bar';
import React from 'react';
import LottieView from "lottie-react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RestaurantScreen from './RestaurantScreen';

import {Button, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ImageBackground,SearchBar, ScrollView} from 'react-native';

export default function HomeScreen({navigation}) {
    const goTo = () => navigation.navigate("Restaurant");
  return (
    <ScrollView style={styles.container}>
      <View style={styles.box} >
        <LottieView style={styles.animation} source={require('./assets/bike.json')} autoPlay loop/>
        <View>
          <Text style={styles.now}>Maintenant</Text>
          <Text style={styles.adresse}><Image style={styles.starLogo} source={require('./assets/position.png')}/> Rue Yves Toudic</Text>
        </View>
        <Image style={styles.accountLogo} source={require('./assets/account.png')}/>
      </View>
      <View style={styles.boxButton}>
        <TouchableOpacity style={styles.livraison} >
          <Text style={styles.livraisonText}>Livraison</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.emporter} >
          <Text style={styles.emporterText}>À emporter</Text>
        </TouchableOpacity>
      
      </View>

      <View style={styles.containerInput}>
        <TextInput
        style={styles.input}
        placeholder="Plats, restaurants ou type de cuisine"
        keyboardType="default"
        />
        <TouchableOpacity  style={styles}>
        <LottieView style={styles.filterAnimation} source={require('./assets/filter.json')} autoPlay loop/>
        </TouchableOpacity>
      </View>

      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={goTo} title={`Go to Details`}>
                <ImageBackground showsHorizontalScrollIndicator={false} style={styles.containerSlider} source={require('./assets/slider1/offers.png')}>
                <Text style={styles.textSlider}>Offres</Text>
          </ImageBackground></TouchableOpacity>
          <ImageBackground style={styles.containerSlider} source={require('./assets/slider1/grocery.png')}>
            <Text style={styles.textSlider}>Courses</Text>
          </ImageBackground>
          <ImageBackground style={styles.containerSlider} source={require('./assets/slider1/acai.png')}>
            <Text style={styles.textSlider}>Petit déjeuner</Text>
          </ImageBackground>
          <ImageBackground style={styles.containerSlider} source={require('./assets/slider1/sandwich.png')}>
            <Text style={styles.textSlider}>Sandwichs</Text>
          </ImageBackground>
          <ImageBackground style={styles.containerSlider} source={require('./assets/slider1/pizza.png')}>
            <Text style={styles.textSlider}>Pizzas</Text>
          </ImageBackground>
          <ImageBackground style={styles.containerSlider} source={require('./assets/slider1/poke.png')}>
            <Text style={styles.textSlider}>Pokés</Text>
          </ImageBackground>
          <ImageBackground style={styles.containerSlider} source={require('./assets/slider1/sushi.png')}>
            <Text style={styles.textSlider}>Sushis</Text>
          </ImageBackground>
          <ImageBackground style={styles.containerSlider} source={require('./assets/slider1/tacos.png')}>
            <Text style={styles.textSlider}>Tacos</Text>
          </ImageBackground>
          <ImageBackground style={styles.containerSlider} source={require('./assets/slider1/organic.png')}>
            <Text style={styles.textSlider}>Végan</Text>
          </ImageBackground>
          <ImageBackground style={styles.containerSlider} source={require('./assets/slider1/kebab.png')}>
            <Text style={styles.textSlider}>Kebabs</Text>
          </ImageBackground>
        </ScrollView>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image style={styles.pubImg} source={require('./assets/pubs/pub1.jpeg')}/>
          <Image style={styles.pubImg} source={require('./assets/pubs/pub2.jpeg')}/>
          <Image style={styles.pubImg} source={require('./assets/pubs/pub3.jpeg')}/>
        </ScrollView>

        <View style={styles.topSlider}>
          <Text style={styles.title}>À la une</Text>
          <Text style={styles.subtitle}>Annonces payantes de nos partenaires</Text>
        </View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <ImageBackground  imageStyle={{ borderRadius: 6}} style={styles.topImgSlider} source={require('./assets/food/food1.jpeg')}>
                <View style={styles.percent}>
                  <Text style={styles.percentText}>- 50%</Text>
                </View>
                <View style={styles.time}>
                  <Text style={styles.titleTime}>15 - 25</Text>
                  <Text style={styles.subtitleTime}>min</Text>
                </View>
              </ImageBackground>
              <Text style={styles.titleFood}>Bagel Max</Text>
              <Text style={styles.descriptionFood}>
                <Text style={styles.reviewFood} ><Image style={styles.starLogo} source={require('./assets/star.png')}/> 4,7 Excellent</Text>
                 (301) · Pizzas · Burger {"\n"}· Apétiz
              </Text>
            </View>
            
            <View>
              <ImageBackground  imageStyle={{ borderRadius: 6}} style={styles.topImgSlider} source={require('./assets/food/food2.jpeg')}>
                <View style={styles.percent}>
                  <Text style={styles.percentText}>- 30%</Text>
                </View>
                <View style={styles.time}>
                  <Text style={styles.titleTime}>25 - 30</Text>
                  <Text style={styles.subtitleTime}>min</Text>
                </View>
              </ImageBackground>
              <Text style={styles.titleFood}>Pizza Hut</Text>
              <Text style={styles.descriptionFood}>
                <Text style={styles.reviewFood} ><Image style={styles.starLogo} source={require('./assets/star.png')}/> 4,2 Excellent</Text>
                 (499) · Pizzas · Pâtes {"\n"}· Américain
              </Text>
            </View>

            <View>
              <ImageBackground imageStyle={{ borderRadius: 6}} style={styles.topImgSlider} source={require('./assets/food/food3.jpeg')}>
                <View style={styles.percent}>
                  <Text style={styles.percentText}>- 20%</Text>
                </View>
                <View style={styles.time}>
                  <Text style={styles.titleTime}>20 - 40</Text>
                  <Text style={styles.subtitleTime}>min</Text>
                </View>
              </ImageBackground>
              <Text style={styles.titleFood}>Fry & Fly</Text>
              <Text style={styles.descriptionFood}>
                <Text style={styles.reviewFood} ><Image style={styles.starLogo} source={require('./assets/star.png')}/> 4,4 Excellent</Text>
                 (532) · Poulet frit ·{"\n"} Sodexo
              </Text>
            </View>

            <View >
              <ImageBackground imageStyle={{ borderRadius: 6}}  style={styles.topImgSlider} source={require('./assets/food/food4.jpeg')}>
                <View style={styles.percent}>
                  <Text style={styles.percentText}>- 40%</Text>
                </View>
                <View style={styles.time}>
                  <Text style={styles.titleTime}>15 - 35</Text>
                  <Text style={styles.subtitleTime}>min</Text>
                </View>
              </ImageBackground>
              <Text style={styles.titleFood}>Sette</Text>
              <Text style={styles.descriptionFood}>
                <Text style={styles.reviewFood} ><Image style={styles.starLogo} source={require('./assets/star.png')}/> 4,5 Excellent</Text>
                 (219) · Italiens · Desserts {"\n"}· Swile
              </Text>
            </View>
          </ScrollView>

          <View style={styles.bigContainer}>
            <ImageBackground imageStyle={{ borderRadius: 6}}  style={styles.bigImg} source={require('./assets/food/food5.jpeg')}>
                <View style={styles.time}>
                  <Text style={styles.titleTime}>20 - 40</Text>
                  <Text style={styles.subtitleTime}>min</Text>
                </View>
              </ImageBackground>
              <Text style={styles.titleFood}>Pokawa</Text>
              <Text style={styles.descriptionFood}>
                <Text style={styles.reviewFood} ><Image style={styles.starLogo} source={require('./assets/star.png')}/> 4,6 Excellent</Text>
                 (875) · Sushi · Asiatique · Apetiz
              </Text>
            </View>
      </View>

      <View style={styles.topSlider}>
          <Text style={styles.title}>Les plus populaires</Text>
          <Text style={styles.subtitle}>Les restaurants les plus aimés de nos clients</Text>
        </View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <ImageBackground  imageStyle={{ borderRadius: 6}} style={styles.topImgSlider} source={require('./assets/food/food4.jpeg')}>
                <View style={styles.percent}>
                  <Text style={styles.percentText}>- 50%</Text>
                </View>
                <View style={styles.time}>
                  <Text style={styles.titleTime}>15 - 25</Text>
                  <Text style={styles.subtitleTime}>min</Text>
                </View>
              </ImageBackground>
              <Text style={styles.titleFood}>Bagel Max</Text>
              <Text style={styles.descriptionFood}>
                <Text style={styles.reviewFood} ><Image style={styles.starLogo} source={require('./assets/star.png')}/> 4,7 Excellent</Text>
                 (301) · Pizzas · Burger {"\n"}· Apétiz
              </Text>
            </View>
            
            <View>
              <ImageBackground  imageStyle={{ borderRadius: 6}} style={styles.topImgSlider} source={require('./assets/food/food3.jpeg')}>
                <View style={styles.percent}>
                  <Text style={styles.percentText}>- 30%</Text>
                </View>
                <View style={styles.time}>
                  <Text style={styles.titleTime}>25 - 30</Text>
                  <Text style={styles.subtitleTime}>min</Text>
                </View>
              </ImageBackground>
              <Text style={styles.titleFood}>Pizza Hut</Text>
              <Text style={styles.descriptionFood}>
                <Text style={styles.reviewFood} ><Image style={styles.starLogo} source={require('./assets/star.png')}/> 4,2 Excellent</Text>
                 (499) · Pizzas · Pâtes {"\n"}· Américain
              </Text>
            </View>

            <View>
              <ImageBackground imageStyle={{ borderRadius: 6}} style={styles.topImgSlider} source={require('./assets/food/food2.jpeg')}>
                <View style={styles.percent}>
                  <Text style={styles.percentText}>- 20%</Text>
                </View>
                <View style={styles.time}>
                  <Text style={styles.titleTime}>20 - 40</Text>
                  <Text style={styles.subtitleTime}>min</Text>
                </View>
              </ImageBackground>
              <Text style={styles.titleFood}>Fry & Fly</Text>
              <Text style={styles.descriptionFood}>
                <Text style={styles.reviewFood} ><Image style={styles.starLogo} source={require('./assets/star.png')}/> 4,4 Excellent</Text>
                 (532) · Poulet frit ·{"\n"} Sodexo
              </Text>
            </View>

            <View >
              <ImageBackground imageStyle={{ borderRadius: 6}}  style={styles.topImgSlider} source={require('./assets/food/food1.jpeg')}>
                <View style={styles.percent}>
                  <Text style={styles.percentText}>- 40%</Text>
                </View>
                <View style={styles.time}>
                  <Text style={styles.titleTime}>15 - 35</Text>
                  <Text style={styles.subtitleTime}>min</Text>
                </View>
              </ImageBackground>
              <Text style={styles.titleFood}>Sette</Text>
              <Text style={styles.descriptionFood}>
                <Text style={styles.reviewFood} ><Image style={styles.starLogo} source={require('./assets/star.png')}/> 4,5 Excellent</Text>
                 (219) · Italiens · Desserts {"\n"}· Swile
              </Text>
            </View>
          </ScrollView>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    marginTop: 30,
    backgroundColor: "white"
  },
  tinyLogo:{
    width: 100,
    height: 100
  },
  box:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  boxButton:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  now:{
    color:"grey"
  },
  adresse:{
    fontWeight:"bold",
    fontSize: 20,
  },
  livraison:{
    alignItems: "center",
    color: "white",
    padding: 10,
    backgroundColor: '#00ccbc',
    borderRadius: 30,
    marginRight: 10,
    marginLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  livraisonText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14
  },
  emporter:{
    alignItems: "center",
    color: "#00ccbc",
    padding: 10,
    backgroundColor: 'transparent',
    borderRadius: 30,
  },
  emporterText:{
    color: '#00ccbc',
    fontWeight: 'normal',
    fontSize: 14
  },
  input:{
    backgroundColor: "#EDF6F6",
    padding: 10,
    margin: 20,
    borderRadius: 10,
    alignSelf: "stretch",
  },
  containerInput:{
    display:"flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  filtreLogo:{
    width: 60,
    height: 60
  },
  containerSlider:{
    borderRadius: 6,
    width:120,
    height:120,
    margin: 10,
    overflow: "hidden"
  },
  textSlider:{
    color: "white",
    fontWeight: "bold",
    bottom: 0,
    position: "absolute",
    padding: 10,
    fontSize: 18
  },
  pubImg:{
    width:300,
    height:150,
    margin: 10,
    borderRadius: 20,
    overflow: "hidden"
  },
  topSlider:{
   margin: 15    
  },
  title:{
    fontWeight:"bold",
    fontSize:20,
    marginBottom: 5
  },
  animation:{
    width:100,
    height:100,
    paddingRight: 20
  },
  subtitle:{
    fontSize: 16
  },
  topImgSlider:{
    width:250,
    height:150,
    margin: 10,
    borderRadius:10,
    paddingBottom: 30,
  },
  bigImg:{
    height:140,
    margin: 10,
    borderRadius:10,
    // overflow:"hidden",
    paddingBottom: 30
  },
  filterAnimation:{
    width:30,
    height:30,
    marginRight:20
  },
  percent:{
    backgroundColor:"#f94f58",
    position: "absolute",
    top: 10,
    borderRadius: 35,
    overflow:"hidden",
    width: 70,
    height: 70,
    display: "flex",
    alignItems:"center",
    justifyContent:"center",
    transform: [{ rotate: '-20deg'}],
    marginLeft:10,
    borderColor: "#fabe01",
    borderWidth:3
  },
  percentText:{
    color:"white",
    fontWeight:"bold"
  },
  time:{
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width:100,
    borderRadius: 40,
    position:"absolute",
    bottom: -12,
    right:20,
    zIndex: 2
  },
  titleTime:{
    textAlign:"center",
    fontSize: 18,
    fontWeight:"bold",
  },
  subtitleTime:{
    textAlign:"center"
  },
  titleFood:{
    fontWeight:"bold",
    marginLeft:10,
    fontSize:16,
    textTransform: "uppercase"
  },
  starLogo:{
    width:20,
    height:20
  },
  adressLogo:{
    width:20,
    height:20,
    marginLeft:10
  },
  descriptionFood:{
    marginLeft:10,
    color:"grey"
  },
  reviewFood:{
    color:"#76bf29",
  },
  bigContainer:{
    marginTop:20
  },
  accountLogo:{
    width:50,
    height:50,
    position:"absolute",
    right:0,
    marginRight:10
  }
});
