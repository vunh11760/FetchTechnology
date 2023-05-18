import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import Modal from 'react-native-modal';
import styles from './style';
import {icon6, iconClose} from '../../../../assets/icons';
type Props = {
  showModal: boolean;
  onRequestClose?: () => void;
  onSuccess?: () => void;
};
function App({showModal, onRequestClose, onSuccess}: Props): JSX.Element {
  return (
    <Modal
      onBackdropPress={onRequestClose}
      statusBarTranslucent
      animationIn="bounceInUp"
      animationInTiming={600}
      backdropColor="#000"
      style={styles.modal}
      isVisible={showModal}
      useNativeDriver={true}
      backdropTransitionOutTiming={0}
      hideModalContentWhileAnimating={true}>
      <View style={styles.viewContainer}>
        <View style={styles.content}>
          <Image
            source={icon6}
            style={styles.imgStatus}
            resizeMode={'contain'}
          />
          <Text style={styles.txtTitle}>You have not arrived back at expo</Text>
          <Text style={styles.txtContent}>
            Please report back at Fouer 1 to complete the job
          </Text>
        </View>
        <TouchableOpacity style={styles.buttonBottom} onPress={onRequestClose}>
          <Text style={styles.txtButton}>OK</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onRequestClose} style={styles.closeView}>
          <Image style={styles.iconClose} source={iconClose} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default App;
