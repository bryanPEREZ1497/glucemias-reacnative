import React from 'react';
import { Tab, Text, TabView } from 'react-native-elements';
import FormScreen from '../screens/papersScrens/FormScreen';
import PaperScreen1 from '../screens/papersScrens/PaperScreen1';
import PapersScreen2 from '../screens/papersScrens/PapersScreen2';
import PapersScreen3 from '../screens/papersScrens/PapersScreen3';
import PapersScreen4 from '../screens/papersScrens/PapersScreen4';
import PapersScreen5 from '../screens/papersScrens/PapersScreen5';

export default () => {
    const [index, setIndex] = React.useState(0);

    return (
        <>
            <Tab
                value={index}
                onChange={(e) => setIndex(e)}
                indicatorStyle={{
                    backgroundColor: 'white',
                    height: 5,
                }}
                variant="primary"
            >
                <Tab.Item
                    title="Ayunas"
                    titleStyle={{ fontSize: 12 }}
                    icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
                />
                <Tab.Item
                    title="Media Mañana"
                    titleStyle={{ fontSize: 12 }}
                    icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
                />
                <Tab.Item
                    title="Almuerzo"
                    titleStyle={{ fontSize: 12 }}
                    icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
                />
                <Tab.Item
                    title="Media Tarde"
                    titleStyle={{ fontSize: 12 }}
                    icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
                />
                <Tab.Item
                    title="Merienda"
                    titleStyle={{ fontSize: 12 }}
                    icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
                />
                <Tab.Item
                    title="Dormir"
                    titleStyle={{ fontSize: 12 }}
                    icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
                />
            </Tab>

            <TabView value={index} onChange={setIndex} animationType="spring">
                <TabView.Item style={{ width: '100%', height: '100%' }}>
                    <FormScreen />
                </TabView.Item>
                <TabView.Item style={{ width: '100%', height: '159px' }}>
                    <PaperScreen1 />
                </TabView.Item>
                <TabView.Item style={{ width: '100%', height: '100%' }}>
                    <PapersScreen2 />
                </TabView.Item>
                <TabView.Item style={{ width: '100%', height: '100%' }}>
                    <PapersScreen3 />
                </TabView.Item>
                <TabView.Item style={{ width: '100%', height: '100%' }}>
                    <PapersScreen4 />
                </TabView.Item>
                <TabView.Item style={{ width: '100%', height: '100%' }}>
                    <PapersScreen5 />
                </TabView.Item>
            </TabView>
        </>
    );
};