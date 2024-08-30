import { StyleSheet, View, Image, FlatList } from 'react-native'
import { COLORS, SIZE } from '../../constants/appearance'
import Root from '../../component/layout/Root'
import { screenSize } from '../../constants/screen-size';
import DefaultButton from '../../component/button/DefaultButton'
import React, { useCallback, useRef, useState } from 'react'
import WellcomeItem from '../../component/scroll-item/WellcomeItem';
import { WellcomeItemData } from '../../constants/feature';

const WellcomeScreen = ({navigation}) => {

    const scrollRef = useRef(0)
    const currentIndex = useRef(0);
    const [indexCarrousel, setIndexCarrousel] = useState(0)

    const WellcomeRender = useCallback(({ item, index }) => (
        <WellcomeItem item={item} />
    ), [])


    const renderDot = (item, index) => {
        return (
            < View
                key={index}
                style={[styles.dot, index === indexCarrousel % WellcomeItemData.length && styles.activeDot]}
            />
        )
    };

    const RenderDots = () => (
        <View style={styles.dotsContainer}>
            {WellcomeItemData.map(renderDot)}
        </View>
    );

    const onScrollHandler = (event) => {
        const contentOffset = event.nativeEvent.contentOffset;
        const index = Math.round(contentOffset.x / screenSize.width);
        currentIndex.current = index;
        setIndexCarrousel(index);
    }

    const onNextPress = () => {
        if (scrollRef.current) {
            const nextIndex = currentIndex.current + 1;
            setIndexCarrousel(nextIndex)
            if (nextIndex < WellcomeItemData.length) {
                scrollRef.current?.scrollToIndex({ index: nextIndex });
            } else {
                navigation.navigate('Auth')
            }
        }
    }

    return (
        <Root>
            <View style={styles.mainContent}>
                <View style={styles.headerContainer}>
                    <View style={styles.imageHeaderContainer}>
                        <Image
                            source={require('../../assets/images/kejaksaan.png')}
                            style={styles.image}
                            resizeMode='contain'
                        />
                    </View>
                </View>
                <FlatList
                    horizontal
                    ref={scrollRef}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    data={WellcomeItemData}
                    pagingEnabled
                    style={{ flex: 1 }}
                    onScroll={onScrollHandler}
                    renderItem={WellcomeRender}
                />

                <View style={styles.footerContainer}>
                    <View>
                        <RenderDots />
                    </View>
                    <DefaultButton onPress={onNextPress} backIcon={{ name: 'arrow-forward-circle-outline' }} />
                </View>
            </View>
        </Root>
    );
};

export default WellcomeScreen

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    footerContainer: {
        height: screenSize.width / 4,
        padding: SIZE.large,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imageHeaderContainer: {
        width: screenSize.width / 10,
        aspectRatio: 1
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: SIZE.small
    },
    contentContainer: {
        flex: 1
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'gray',
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: COLORS.primary,
    },
})