import React, {useCallback} from 'react';
import {Card, Paragraph, Button} from 'react-native-paper';
import {View, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
export default function HomeCard() {
  const navigator = useNavigation();
  const handleGoToPlantPage = useCallback(() => {
    navigator.navigate('Plant', {
      id: '1',
    });
  }, [navigator]);
  return (
    <View style={styles.container}>
      <Card elevation={4}>
        <Text style={styles.title}>Shopping Living</Text>
        <Card.Cover
          style={styles.cardImage}
          source={{uri: 'https://picsum.photos/700'}}
        />

        <Card.Content>
          <Paragraph style={styles.cardParagraph}>
            Rua Eng Leonardo Arcoverde Madalena
          </Paragraph>
        </Card.Content>
        <Card.Actions style={styles.cardActions}>
          <Button onPress={handleGoToPlantPage} mode="contained">
            Selecionar
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flexGrow: 1,
  },
  cardImage: {
    marginVertical: 10,
    marginHorizontal: 60,
  },
  cardActions: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardParagraph: {
    maxWidth: 200,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    marginVertical: 5,
    marginHorizontal: 5,
  },
});
