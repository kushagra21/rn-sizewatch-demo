import _ from 'lodash';
import moment from 'moment';
import { StyleSheet, Text } from 'react-native';

export function LastUpdated({ at, source }: { at: Date; source: string }) {
  return (
    <Text style={styles.label}>
      {_.capitalize(source)} updated {moment(at).fromNow()}
    </Text>
  );
}

const styles = StyleSheet.create({
  label: { color: '#666', fontSize: 12, padding: 16, textAlign: 'center' },
});
