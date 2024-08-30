import { Alert, StyleSheet, Text, View } from "react-native";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import MapView, { Circle, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { MainRegion, mapStyle } from "../../constants/map-config";
import { Ionicons } from "@expo/vector-icons";
import { kecamatan } from "../../constants/kecamatan";
import { COLORS } from "../../constants/appearance";
import * as geolib from "geolib";
import { kriminalStore } from "../../store/kriminalStore";

const MainMap = forwardRef(({ userLocation, showModal, subdistricts }, ref) => {
  const mapRef = useRef(null);
  const getDataKriminal = kriminalStore((state) => state.kriminal);

  useImperativeHandle(ref, () => ({
    reportLocation: () => {
      reportLocation(userLocation);
    },
  }));

  useEffect(() => {
    if (userLocation) {
      const { latitude, longitude } = userLocation.coords;
      const newRegion = {
        latitude,
        longitude,
        latitudeDelta: MainRegion.latitudeDelta,
        longitudeDelta: MainRegion.longitudeDelta,
      };

      mapRef.current.animateToRegion(newRegion, 1000);
    }
  }, [userLocation]);

  const reportLocation = useCallback(
    (location) => {
      if (!location) {
        Alert.alert(
          "Lokasi tidak ditemukan",
          "Anda harus memberikan akses lokasi untuk menggunakan fitur ini",
          [{ text: "Oke" }]
        );
        return;
      }

      const checkData = isLocationInKecamatan(location.coords);

      if (checkData) {
        showModal(checkData, location.coords);
      } else {
        Alert.alert(
          "Lokasi tidak ditemukan",
          "Anda tidak berada di dalam kecamatan",
          [{ text: "Oke" }]
        );
      }
    },
    [ref]
  );

  const isLocationCircle = (location, circle) => {
    const center = {
      latitude: circle.latitude,
      longitude: circle.longitude,
    };
    const getLocation = {
      latitude: location.latitude,
      longitude: location.longitude,
    };
    const distance = geolib.getDistance(getLocation, center);
    return distance <= circle.radius;
  };

  const isLocationInKecamatan = (location) => {
    for (let i = 0; i < subdistricts.length; i++) {
      if (isLocationCircle(location, subdistricts[i])) {
        return subdistricts[i];
      }
    }
    return false;
  };

  const mapOnPressHandler = (e) => {
    const pressLocation = e.nativeEvent.coordinate;
    if (pressLocation) {
      reportLocation({ coords: pressLocation });
    }
  };

  return (
    <MapView
      ref={mapRef}
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      region={MainRegion}
      customMapStyle={mapStyle}
      showsUserLocation={!!userLocation}
      showsMyLocationButton={false}
      onPress={mapOnPressHandler}
    >
      {subdistricts.length >= 1 &&
        subdistricts.map((item, index) => (
          <View key={index}>
            <Marker
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
              title={item.name}
              tracksViewChanges={false}
            >
              <Ionicons name="business" size={24} color={COLORS.primary} />
            </Marker>
            <Circle
              center={{ latitude: item.latitude, longitude: item.longitude }}
              radius={item.radius}
              fillColor={COLORS.safe}
              strokeWidth={0}
            />
          </View>
        ))}

      {getDataKriminal.length >= 1 &&
        getDataKriminal.map((item, index) => (
          <Marker
            key={index}
            coordinate={item.center}
            title={item.jenis}
            description={item.description}
            tracksViewChanges={false}
          >
            <Ionicons name="warning" size={24} color={COLORS.danger} />
          </Marker>
        ))}
    </MapView>
  );
});

export default MainMap;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
