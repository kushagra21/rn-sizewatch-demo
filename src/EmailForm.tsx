import { useFormik } from 'formik';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export function EmailForm() {
  const form = useFormik({
    initialValues: { email: '' },
    validate: values => (/^\S+@\S+$/.test(values.email) ? {} : { email: 'Enter an email address' }),
    onSubmit: values => console.log('Subscribed', values.email),
  });

  return (
    <View style={styles.form}>
      <TextInput
        accessibilityLabel="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={form.handleChange('email')}
        placeholder="you@example.com"
        style={styles.input}
        value={form.values.email}
      />
      {form.errors.email ? <Text style={styles.error}>{form.errors.email}</Text> : null}
      <Button onPress={() => form.handleSubmit()} title="Subscribe" />
    </View>
  );
}

const styles = StyleSheet.create({
  form: { gap: 8, padding: 16 },
  input: { borderColor: '#999', borderRadius: 6, borderWidth: 1, padding: 10 },
  error: { color: '#b00020' },
});
