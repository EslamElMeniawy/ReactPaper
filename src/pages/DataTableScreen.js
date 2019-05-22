import React from 'react';
import { SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { DataTable, Surface } from 'react-native-paper';

export default function DataTableScreen() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#34515e" />
      <ScrollView>
        <Surface
          style={{
            marginVertical: 16,
            marginHorizontal: 16,
            elevation: 4,
            padding: 8,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Dessert</DataTable.Title>
              <DataTable.Title numeric>Calories</DataTable.Title>
              <DataTable.Title numeric>Fat</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell>Frozen yogurt</DataTable.Cell>
              <DataTable.Cell numeric>159</DataTable.Cell>
              <DataTable.Cell numeric>6.0</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
              <DataTable.Cell numeric>237</DataTable.Cell>
              <DataTable.Cell numeric>8.0</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Pagination
              page={1}
              numberOfPages={3}
              onPageChange={(page) => {
                console.log(page);
              }}
              label="1-2 of 6"
            />
          </DataTable>
        </Surface>
      </ScrollView>
    </SafeAreaView>
  );
}
