import React from 'react';
import renderer from 'react-test-renderer';
import Menubar from './Menubar';

test('Menubar testing', () => {
    const json = {
        data: {
            width: "3",
            initialNavBarWidth: "3",
            expandedNavBarWidth: "18",
            updateWidth: () => { },
            fetchData: () => { },
            navData: [
                {
                    title: 'Reporting',
                    url: null,
                    id: 'menu-reporting',
                    icon: 'reporting',
                    hasAlert: null,
                    children: [
                        {
                            title: 'Sales Dashboard',
                            url: 'https://partnerswayfaircom.csnzoo.com/v/sales_dashboard/index',
                            id: 'menu-sales-dashboard',
                            icon: null,
                            hasAlert: null,
                            children: []
                        },
                        {
                            title: 'Customer Incidents Dashboard',
                            url: 'https://partnerswayfaircom.csnzoo.com/v/customer-incidents-dashboard/index',
                            id: 'menu-customer-incidents-dashboard',
                            icon: null,
                            hasAlert: null,
                            children: []
                        }
                    ]
                },
                {
                    title: 'Tickets',
                    url: 'https://partnerswayfaircom.csnzoo.com/app/tickets',
                    id: 'menu-ticket',
                    icon: 'tickets',
                    hasAlert: null,
                    children: []
                }
            ]
        }
    }
    const component = renderer.create(
        <Menubar {...json} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});