import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

import Table from "./Table";
import getRundomNumber from "./utils";

export default function App() {
  const [columns, setColumns] = useState(null);
  const [rows, setRows] = useState(null);

  const [table, setTable] = useState([]);

  const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);

  const onClickScreen = () => {
    setIsShowKeyBoard(false);
    Keyboard.dismiss();
  };

  const createColumns = () => {
    const arrColumn = [];

    for (let j = 0; j < columns; j += 1) {
      arrColumn.push(getRundomNumber(100, 999));
    }

    return arrColumn;
  };

  const createTable = () => {
    const arrRow = [];
    for (let i = 0; i < rows; i += 1) {
      arrRow.push(createColumns());
    }

    setTable(arrRow);
    Keyboard.dismiss();
  };

  const addRow = () => {
    table.push(createColumns());

    setTable([...table]);
  };

  const onDeleteRow = (rowNum) => {
    table.splice(rowNum, 1);
    setTable([...table]);
  };

  return (
    <TouchableWithoutFeedback onPress={onClickScreen}>
      <View style={styles.container}>
        <View style={styles.form}>
          <View>
            <Text style={styles.inpTitle}>Enter the number of columns</Text>
            <TextInput
              style={styles.inp}
              textAlign={"center"}
              onFocus={() => setIsShowKeyBoard(true)}
              value={columns}
              onChangeText={(value) => setColumns(value)}
            />
          </View>
          <View>
            <Text style={styles.inpTitle}>Enter the number of rows</Text>
            <TextInput
              style={styles.inp}
              textAlign={"center"}
              onFocus={() => setIsShowKeyBoard(true)}
              value={rows}
              onChangeText={(value) => setRows(value)}
            />
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.5}
              onPress={createTable}
            >
              <Text style={styles.btnTitle}>Create table</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.5}
              onPress={addRow}
            >
              <Text style={styles.btnTitle}>Add row</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Table data={table} onDeleteRow={onDeleteRow} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  form: {
    marginHorizontal: 40,
    marginTop: 40,
  },
  inpTitle: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 16,
  },
  inp: {
    borderWidth: 1,
    borderColor: "#6495ed",
    height: 40,
    borderRadius: 5,
  },
  btnContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    height: 40,
    width: 145,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#6495ed",
    backgroundColor: "#6495ed",

    alignItems: "center",
    justifyContent: "center",
  },
  btnTitle: {
    color: "#eee",
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
  },
});
