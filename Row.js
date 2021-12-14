import React from "react";
import { StyleSheet, View, Text } from "react-native";
import getRundomNumber from "./utils";

const Row = ({ row, isResult }) => {
  return (
    <View style={styles.row}>
      {row.map((cell, cellInd) => (
        <View
          style={[
            styles.rowCell,
            cellInd % 2 && styles.rowCellBg,
            isResult && styles.rowCellResult,
          ]}
          key={getRundomNumber()}
        >
          <Text
            style={[
              styles.rowTitle,
              cellInd % 2 && styles.rowTitleColor,
              isResult && styles.rowTitleResult,
            ]}
          >
            {cell}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  rowCell: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#6495ed",
    width: 50,
    alignItems: "center",
    marginBottom: 1,
    marginRight: 1,
  },
  rowTitle: { padding: 4, overflow: "hidden" },
  rowTitleColor: {
    color: "#eee",
  },

  rowCellBg: {
    backgroundColor: "#6495ed",
    color: "#fff",
  },
  rowCellResult: {
    backgroundColor: "#ffa07a",
    borderColor: "#ff4500",
  },
  rowTitleResult: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Row;
