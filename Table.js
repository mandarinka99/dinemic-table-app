import React, { useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Row from "./Row";
import getRundomNumber from "./utils";

export default function Table({ data, onDeleteRow }) {
  const calcSum = () => {
    let sumRow = [];
    let total = 0;
    let totalCount = 0;

    if (!data.length || !data[0]) {
      return null;
    }

    for (let rowNum = 0; rowNum < data[0].length; rowNum += 1) {
      sumRow.push(0);
    }

    for (let rowNum = 0; rowNum < data.length; rowNum += 1) {
      for (let columnNum = 0; columnNum < data[rowNum].length; columnNum += 1) {
        sumRow[columnNum] += data[rowNum][columnNum];
        total += data[rowNum][columnNum];
        totalCount += 1;
      }
    }

    const avarageRow = sumRow.map((item) => Math.round(item / 2));
    return {
      sumRow,
      avarageRow,
      total,
      totalAvarage: Math.round(total / totalCount),
    };
  };

  const values = useMemo(() => calcSum(data), [data]);

  return (
    <View style={styles.table}>
      <ScrollView horizontal={true} style={styles.scrollView}>
        <ScrollView>
          <View>
            {data.map((row, rowNum) => (
              <TouchableOpacity
                onPress={() => onDeleteRow(rowNum)}
                key={getRundomNumber()}
              >
                <Row row={row} />
              </TouchableOpacity>
            ))}
            {values && (
              <TouchableOpacity>
                <Row row={values.sumRow} isResult />
                <Row row={values.avarageRow} isResult />
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </ScrollView>

      {values && (
        <View>
          <View style={styles.titleContainer}>
            <Text>Total - </Text>
            <Text>{values.total}</Text>
          </View>
          <View style={styles.titleContainer}>
            <Text>Total avarage - </Text>
            <Text>{values.totalAvarage}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  table: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 40,
  },
  titleContainer: {
    marginTop: 10,
    flexDirection: "row",
  },

  scrollView: {
    maxHeight: 300,
  },
});
