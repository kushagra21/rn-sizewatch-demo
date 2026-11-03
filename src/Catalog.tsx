import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import products from './data/products.json';

const hero = require('../assets/hero.png');

export function Catalog() {
  return (
    <View style={styles.catalog}>
      <Image accessibilityIgnoresInvertColors source={hero} style={styles.hero} />
      <FlatList
        data={products.filter(p => p.inStock)}
        keyExtractor={p => String(p.id)}
        renderItem={({ item }) => (
          <Text style={styles.row}>
            {item.name} · ${item.price.toFixed(2)}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  catalog: { flex: 1, padding: 16 },
  hero: { alignSelf: 'center', height: 96, width: 96 },
  row: { paddingVertical: 6 },
});
