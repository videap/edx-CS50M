import { StyleSheet } from 'react-native';

export const fonts = {
  normal: 'Gill Sans',
  bold: 'GillSans-Bold',
  bold_italic: 'GillSans-BoldItalic',
  italic: 'GillSans-Italic',
  light: 'GillSans-Light',
  light_italic: 'GillSans-LightItalic',
  semibold: 'GillSans-SemiBold',
  semibold_italic: 'GillSans-SemiBoldItalic',
  ultrabold: 'GillSans-UltraBold',
}

export const colors = {
  charcoal: "#394053",
  light_pink: "#DBCBD8",
  azure: "#F2FDFF",
  tiffanny_blue: "#9AD4D6",
  oxford_blue: "#101935",

}

const styles = StyleSheet.create({
    home_container: {
      flex: 1,
      backgroundColor: colors.oxford_blue,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title_container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      text: {
        color: colors.tiffanny_blue,
        fontSize: 48,
        fontFamily: fonts.ultrabold
      }
    },
    cards_container:{
      category: {
        flex: 4,
        width: "100%",
        card: {
          flex: 1,
          backgroundColor: colors.charcoal,
          borderColor: colors.azure,
          borderWidth: 4,
          width: "90%",
          margin:20,
          alignItems: 'center',
          justifyContent: 'center',
        },
        alignItems: "center",
        justifyContent: "center",
        text: {
          fontSize: 32,
          fontFamily: fonts.ultrabold,
          color: colors.tiffanny_blue
        }
      },
      movie: {
        flex: 1,
        card: {
          flex: 1,
          backgroundColor: colors.charcoal,
          borderColor: colors.azure,
          borderWidth: 2,
          width: "90%",
          margin:5,
          alignItems: 'center',
          justifyContent: 'center',
        },
        alignItems: "center",
        justifyContent: "center",
        text: {
          fontSize: 24,
          fontFamily: fonts.bold,
          color: colors.tiffanny_blue
        }
      }
    },
    movie_carousel: {
      width: "100%",
      backgroundColor: colors.oxford_blue,
      alignItems: 'center',
      justifyContent: 'center',
    },
    movie_info: {
      text: {
        fontSize: 72,
        color: colors.azure
      }
    },
    actor_info: {
      text: {
        fontSize: 72,
        color: colors.azure
      }
    },
    ratings: {
      card: {
        text: {
          fontSize: 36,
          color: colors.light_pink
        }
      }
    },
  });

export default styles;