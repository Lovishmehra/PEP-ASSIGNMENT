import React from 'react';
import './Plans.css'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import plansImage from '../../images/plans.jpg';
import MembershipPlans from '../../components/MembershipPlans/MembershipPlans';

const Plans = () => {
    return (
        <>
            <BreadCrumb title="Membership Plans" image={plansImage}>
            At RockGym, we empower individuals of all fitness levels to achieve their personal best. Start your journey to health and strength with us today</BreadCrumb>
            <MembershipPlans></MembershipPlans>
        </>
    );
};

export default Plans;