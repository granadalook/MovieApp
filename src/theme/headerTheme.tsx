import {StyleSheet} from 'react-native';

export const stylesHeader = StyleSheet.create({
  bgcolor: {
    width: '100%',
    height: 400,
    position: 'absolute',
    backgroundColor: '#c31e1f',
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{scaleX: 2}],
  },
  contenImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 30,
  },
  Image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
  content: {marginHorizontal: 30, marginTop: 30},
  contentTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {fontWeight: 'bold', color: '#FFF', fontSize: 27},
  lenguage: {
    fontWeight: '700',
    color: 'black',
    fontSize: 15,
    backgroundColor: '#e31618',
    borderRadius: 5,
    padding: 5,
    marginBottom: 5,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10,
  },
});
