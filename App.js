// import { StatusBar } from "expo-status-bar";
// import { useState } from "react";
// import { StyleSheet, Text, View } from "react-native";
// import ComponentPresentation from "./src/widgets/ComponentPresentation";
// import { Button } from "react-native";

// export default function App() {
//   const [counter, setCounter] = useState(0);

//   const up = () => {
//     setCounter(counter + 1);
//   };

//   const down = () => {
//     if (counter > 0) {
//       setCounter(counter - 1);
//     }
//   };
//   return (
//     <View style={styles.container}>
//       <ComponentPresentation
//         down={down}
//         up={up}
//         reset={() => setCounter(0)}
//         counter={counter}
//         onPress={() => setCounter(counter + 1)}
//       />

//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// FLEX BOX REACT
// import { useState } from "react";
// import { StyleSheet, View, Text } from "react-native";

// export default function App() {
//   return (
//     <>
//       <View style={styles.heading}>
//         <Text style={styles.text}>Morning, Eko</Text>
//       </View>
//       <View style={styles.container}>
//         <View style={styles.item1}>
//           <Text>Lorem ipsum</Text>
//         </View>
//         <View style={styles.item2}>
//           <Text>Dolor sir ameteru</Text>
//         </View>
//         <View style={styles.item3}>
//           <Text>Dolor sir ameteru</Text>
//         </View>
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   heading: {
//     marginTop: 50,
//     marginHorizontal: 10,
//   },
//   text: {
//     fontWeight: "bold",
//     fontSize: 20,
//   },
//   container: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "center",
//     // alignItems: "",
//     paddingVertical: 32,
//     gap: 20,
//   },
//   item1: {
//     padding: 10,
//     height: "20%",
//     backgroundColor: "#8e8e8e",
//     borderRadius: 10,
//   },
//   item2: {
//     padding: 10,
//     height: "20%",
//     backgroundColor: "#8e8e8e",
//     borderRadius: 10,
//   },
//   item3: {
//     padding: 10,
//     height: "20%",
//     backgroundColor: "#8e8e8e",
//     borderRadius: 10,
//   },
// });

// LISITEM

// import { useState } from "react";
// import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";

// const DATA = [
//   {
//     kodeBarang: "BRG-112",
//     namaBarang: "Kotak Pandora",
//     hargaBeli: 7000,
//     hargaJual: 7400,
//     jumlahBarang: 200,
//   },
//   {
//     kodeBarang: "BRG-111",
//     namaBarang: "Kotak Pandora",
//     hargaBeli: 7000,
//     hargaJual: 7400,
//     jumlahBarang: 200,
//   },
//   {
//     kodeBarang: "BRG-101",
//     namaBarang: "Kotak Pandora",
//     hargaBeli: 7000,
//     hargaJual: 7400,
//     jumlahBarang: 200,
//   },
//   {
//     kodeBarang: "BRG-1",
//     namaBarang: "Kotak Pandora",
//     hargaBeli: 7000,
//     hargaJual: 7400,
//     jumlahBarang: 200,
//   },
//   {
//     kodeBarang: "BRG-006",
//     namaBarang: "Krisbow Battery A2",
//     hargaBeli: 7000,
//     hargaJual: 7400,
//     jumlahBarang: 200,
//   },
//   {
//     kodeBarang: "BRG-005",
//     namaBarang: "Yupi Candy Bear",
//     hargaBeli: 920,
//     hargaJual: 1000,
//     jumlahBarang: 120,
//   },
//   {
//     kodeBarang: "BRG-004",
//     namaBarang: "Happy Care Hand Sanitizer",
//     hargaBeli: 12000,
//     hargaJual: 15000,
//     jumlahBarang: 98,
//   },
//   {
//     kodeBarang: "BRG-002",
//     namaBarang: "Dompet Nevergate",
//     hargaBeli: 14000,
//     hargaJual: 23000,
//     jumlahBarang: 166,
//   },
//   {
//     kodeBarang: "BRG-908",
//     namaBarang: "Kotak Pandora",
//     hargaBeli: 7000,
//     hargaJual: 7400,
//     jumlahBarang: 200,
//   },
// ];

// const ListItem = ({ item }) => {
//   return (
//     <TouchableOpacity
//       onPress={() => Alert.alert("Barang", item.namaBarang)}
//       style={{
//         flex: 1,
//         flexDirection: "row",
//         justifyContent: "space-between",
//         paddingHorizontal: 20,
//         paddingVertical: 10,
//         backgroundColor: "#e3e3e3",
//         borderRadius: 8,
//         elevation: 2,
//       }}
//     >
//       <View>
//         <Text>{item.namaBarang}</Text>
//         <Text>{item.kodeBarang}</Text>
//       </View>
//       <View>
//         <Text>{item.hargaJual}</Text>
//         <Text>{item.hargaBeli}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default function App() {
//   return (
//     <>
//       <View style={styles.container}>
//         {DATA.map((item, index) => (
//           <ListItem item={item} key={index} />
//         ))}
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   heading: {
//     marginTop: 50,
//     marginHorizontal: 10,
//   },
//   text: {
//     fontWeight: "bold",
//     fontSize: 20,
//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     margin: 30,
//     paddingVertical: 32,
//     gap: 8,
//   },

//   item1: {
//     padding: 10,
//     height: "20%",
//     backgroundColor: "#8e8e8e",
//     borderRadius: 10,
//   },
//   item2: {
//     padding: 10,
//     height: "20%",
//     backgroundColor: "#8e8e8e",
//     borderRadius: 10,
//   },
//   item3: {
//     padding: 10,
//     height: "20%",
//     backgroundColor: "#8e8e8e",
//     borderRadius: 10,
//   },
// });

// import { useState } from "react";
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   Alert,
//   FlatList,
// } from "react-native";
// import DATA from "./DATA";
// import DATA_SERVER from "./DATA_SERVER";

// const ListItem = ({ item }) => {
//   return (
//     <TouchableOpacity
//       onPress={() => Alert.alert("Barang", item.namaBarang)}
//       style={{
//         flex: 1,
//         flexDirection: "row",
//         justifyContent: "space-between",
//         paddingHorizontal: 20,
//         paddingVertical: 10,
//         backgroundColor: "#e3e3e3",
//         borderBottomWidth: 0.5,
//         borderBottomColor: "gray",
//       }}
//     >
//       <View>
//         <Text>{item.namaBarang}</Text>
//         <Text>{item.kodeBarang}</Text>
//       </View>
//       <View>
//         <Text>{item.hargaJual}</Text>
//         <Text>{item.hargaBeli}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default function App() {
//   const [products, setProducts] = useState(DATA);
//   const [isRefresh, setRefresh] = useState(false);

//   const callAPI = () => {
//     setRefresh(true);
//     setTimeout(() => {
//       setProducts(DATA);
//       console.log("Refresh kepanggil");
//       setRefresh(false);
//     }, 1000);
//   };

//   const infiniteScroll = () => {
//     setRefresh(true);
//     setTimeout(() => {
//       setProducts((values) => [...values, ...DATA_SERVER]);
//       console.log("Refresh kebawah kepanggil");
//       setRefresh(false);
//     }, 3000);
//   };

//   return (
//     <>
//       <View style={styles.container}>
//         <FlatList
//           onRefresh={callAPI}
//           onEndReached={infiniteScroll}
//           refreshing={isRefresh}
//           data={products}
//           style={{ flex: 1, backgroundColor: "blue" }}
//           renderItem={({ item }) => <ListItem item={item} />}
//           keyExtractor={(item, index) => index}
//         />
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   heading: {
//     marginTop: 50,
//     marginHorizontal: 10,
//   },
//   text: {
//     fontWeight: "bold",
//     fontSize: 20,
//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     // marginVertical: 20,
//     paddingVertical: 32,
//     gap: 8,
//   },

//   item1: {
//     padding: 10,
//     height: "20%",
//     backgroundColor: "#8e8e8e",
//     borderRadius: 10,
//   },
//   item2: {
//     padding: 10,
//     height: "20%",
//     backgroundColor: "#8e8e8e",
//     borderRadius: 10,
//   },
//   item3: {
//     padding: 10,
//     height: "20%",
//     backgroundColor: "#8e8e8e",
//     borderRadius: 10,
//   },
// });

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FormSignin from "./src/widgets/FormSignin";
import { ScrollView } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import ScreenProductDetail from "./src/screens/products/ScreenProductDetail";
import ScreenPenjualanCreate from "./src/screens/penjualan/ScreenPenjualanCreate";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenPenjualanSuccess from "./src/screens/penjualan/ScreenPenjualanSuccess";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="#fff"
        barStyle={"dark-content"}
        // showHideTransition={statusBarTransition}
        // hidden={hidden}
        animated={true}
      />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="ScreenPenjualanCreate"
            component={ScreenPenjualanCreate}
          />
          <Stack.Screen
            name="ScreenPenjualanSuccess"
            component={ScreenPenjualanSuccess}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display: "flex",
    flexGrow: 1,
    // backgroundColor: "",
    marginHorizontal: 24,
    justifyContent: "center",
    paddingVertical: 20,
    // marginTop: 50,
  },

  // containerCenter: {
  //   flexGrow: BASE_CONFIG_STYLE_FLEX_GROW_DEFAULT,
  //   marginHorizontal: BASE_CONFIG_STYLE_MARGIN_HORIZONTAL,

  //   gap: BASE_CONFIG_STYLE_GAP,
  //   paddingVertical: BASE_CONFIG_STYLE_PADDING_VERTICAL,
  // },
});
