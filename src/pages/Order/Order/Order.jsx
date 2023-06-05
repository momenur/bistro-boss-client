import Cover from "../../Shared/Cover/Cover";
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {

    <Helmet>
        <title>Bistro Boss | Order</title>
    </Helmet>

    const categorys = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = categorys.indexOf(category)
    const [tabIndex, setTebIndex] = useState(initialIndex)
    const [menu] = useMenu();




    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Cover coverImg={orderCoverImg} coverTitle="Order Food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTebIndex(index)}>
                <div className="flex justify-center mt-12 mb-4">
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                </div>
                <TabPanel>
                    <div className="grid-cols-3 gap-4 md:grid">
                        {
                            salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid-cols-3 md:grid">
                        {
                            pizza.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid-cols-3 md:grid">
                        {
                            soup.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid-cols-3 md:grid">
                        {
                            desserts.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid-cols-3 md:grid">
                        {
                            drinks.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>

    );
};

export default Order;