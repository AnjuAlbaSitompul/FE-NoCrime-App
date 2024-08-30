import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import DefaultButton from "../../component/button/DefaultButton";
import MainMap from "../../component/map/MainMap";
import { SIZE } from "../../constants/appearance";
import * as Location from "expo-location";
import FloatModal from "../../component/modal/FloatModal";
import { kriminalStore } from "../../store/kriminalStore";
import { getSubdistrict } from "../../services/private/subdistrict-services";
import LoadingOverlay from "../../component/loading/LoadingOverlay";

const Mainscreen = () => {
  const reportLocation = useRef();
  const setKriminal = kriminalStore((state) => state.setKriminal);
  const [fetching, setFetching] = useState(false);
  const [subdistricts, setSubdistricts] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [report, setReport] = useState({});
  const [showReportModal, setShowReportModal] = useState(false);

  useEffect(() => {
    fetchSubdistricts();
  }, []);

  const fetchSubdistricts = async () => {
    setFetching(true);
    const response = await getSubdistrict();
    if (response.status === "success") {
      setSubdistricts(response.data);
    }
    setFetching(false);
  };

  const locationHandler = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Akses lokasi ditolak",
        "Anda harus memberikan akses lokasi untuk menggunakan fitur ini",
        [{ text: "Oke" }]
      );
    }

    let location = await Location.getCurrentPositionAsync({});
    setUserLocation(location);
  };

  const handlerReport = () => {
    reportLocation.current.reportLocation();
  };

  const getReportData = (data, location) => {
    setReport({
      kecamatan: data.name,
      description: data.alt_name,
      center: {
        latitude: location.latitude,
        longitude: location.longitude,
      },
      time: new Date().getTime(),
    });
    setShowReportModal(!showReportModal);
  };

  const onReportHandler = () => {
    setKriminal(report);
    setShowReportModal(!showReportModal);
    Alert.alert("Laporan Berhasil", "Laporan Anda telah terkirim", [
      { text: "Oke" },
    ]);
  };

  if (fetching) {
    return (
      <View style={styles.emptyContainer}>
        <LoadingOverlay />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MainMap
        userLocation={userLocation}
        ref={reportLocation}
        subdistricts={subdistricts}
        showModal={(data, location) => getReportData(data, location)}
      />
      <View style={styles.buttonLapor}>
        <DefaultButton
          onPress={handlerReport}
          backIcon={{ name: "hand-right" }}
        />
      </View>
      <View style={styles.featureListContainer}>
        <DefaultButton
          onPress={locationHandler}
          backIcon={{ name: "locate-outline" }}
        />
      </View>
      <FloatModal
        show={showReportModal}
        onPress={onReportHandler}
        onRequestClose={() => setShowReportModal(!showReportModal)}
        getValue={(val) => setReport((prev) => ({ ...prev, jenis: val }))}
      />
    </View>
  );
};

export default Mainscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonLapor: {
    position: "absolute",
    bottom: SIZE.normal,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  featureListContainer: {
    alignItems: "flex-start",
    padding: SIZE.small,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
