import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {icon4} from '../../assets/icons/index';
import styles from './styles';
import BottomView from './components/BottomView';
import {useNavigation} from '@react-navigation/native';
import MapViewDirections from 'react-native-maps-directions';
import ModalStatus from './components/ModalStatus';
interface RouterProps {
  route: any;
}
const origin = {latitude: 10.777141743813571, longitude: 106.69524845236684};
const destination = {
  latitude: 10.782794709259262,
  longitude: 106.69583171585802,
};
const GOOGLE_MAPS_APIKEY = 'AIzaSyDPOZ2P-BBCYSHEQKe01Mp8lmk0tk__QpY';
const Map = ({route}: RouterProps) => {
  const [refMap, setRefMap] = useState(null);
  const navigation = useNavigation();

  const [showModal, setShowModal] = useState(false);
  const [waypoint, setWaypoint] = useState(null);
  const onMapPress = e => {
    setWaypoint(e.nativeEvent.coordinate);
  };
  const goBack = () => {
    navigation.goBack();
  };
  const zoomToLocation = () => {
    if (refMap !== null) {
      let region = {
        latitude: 10.777141743813571,
        longitude: 106.69524845236684,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      };

      let initialRegion = Object.assign({}, region);
      initialRegion['latitudeDelta'] = 0.005;
      initialRegion['longitudeDelta'] = 0.005;
      refMap?.animateToRegion(initialRegion, 500);
    }
  };
  return (
    <View style={styles.container}>
      <MapView
        onPress={onMapPress}
        ref={ref => setRefMap(ref)}
        // pointerEvents="none"
        mapType={'terrain'}
        // provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 10.777141743813571,
          longitude: 106.69524845236684,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker coordinate={origin} />
        <Marker coordinate={destination} />
        <MapViewDirections
          waypoints={waypoint ? [waypoint] : undefined}
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
          optimizeWaypoints={true}
        />
      </MapView>
      <BottomView zoomToLocation={zoomToLocation} setShowModal={setShowModal} />
      <ModalStatus
        showModal={showModal}
        onRequestClose={() => {
          goBack();
          setShowModal(false);
        }}
        onSuccess={() => {
          goBack();
          setShowModal(false);
        }}
      />

      <TouchableOpacity
        style={styles.viewButonBack}
        onPress={() => {
          goBack();
        }}>
        <Image style={styles.iconBack} source={icon4} resizeMode={'contain'} />
      </TouchableOpacity>
    </View>
  );
};
export default Map;
