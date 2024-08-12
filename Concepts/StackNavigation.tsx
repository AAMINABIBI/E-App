import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';


const Stack = createNativeStackNavigator();
const StackNavigation = () => {

    return (
        <NavigationContainer>

            <Stack.Navigator  
            screenOptions={{
                headerStyle:{
                    backgroundColor:'skyblue'
                },
                headerTintColor:'white',
                headerBackTitleStyle:{
                    fontSize:25
                }
            }}
            >
                <Stack.Screen name='home'component={Home} 
                
              />
                <Stack.Screen name='login' component={Login}
                  options={{
                    headerTitle:()=><Button title='leftBtn'/>,
                    headerRight:()=><Button title='Btn' onPress={()=>console.warn('Btn pressed')}/>,

                }}
                />
            </Stack.Navigator>
        </NavigationContainer>


    )
}

const Home = (props) => {
    const name='amna';
    const age=20
    return (

        <View>
            <Text>Home screen</Text>
            <Button title='go to login page' onPress={()=>props.navigation.navigate('login',{name:name ,age:age})} />
        </View>
    )
}

const Login=(props)=>{
    const { name, age } = props.route.params; // Destructuring params correctly
    return(
        <View>
       <Text>Login Screen</Text>
       <Text>name:{name}</Text>
       <Text>Age:{age}</Text>

        </View>
    )
}

export default StackNavigation

