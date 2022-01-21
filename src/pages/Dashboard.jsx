import React, {useEffect} from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'

const chartOptions = {
    series: [{
        name: 'Brokered Funded',
        data: [150,190,220,190,236,180,230,191,260,210]
    }, {
        name: 'Corespondent Funded',
        data: [170, 230, 207, 180, 240, 216, 240, 220, 251, 210]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan 21', 'Feb 21', 'Mar 21', 'Apr 21', 'May 21', 'Jun 21', 'Jul 21', 'Aug 21', 'Sep 21', 'Oct 21', 'Nov 21', 'Dec 21']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const topCustomers = {
    head: [
        'loan Officer',
        'loans',
        'revenue'
    ],
    body: [
        {
            "username": "Sam Schwalenburg",
            "order": "25",
            "price": "$35,870"
        },
        {
            "username": "Alex Dierks",
            "order": "31",
            "price": "$42,251"
        },
        {
            "username": "Brittany Roxburgh",
            "order": "35",
            "price": "$45,840"
        },
        {
            "username": "Dustin Dumestre",
            "order": "40",
            "price": "$52,251"
        },
        {
            "username": "Rylee Stanley",
            "order": "38",
            "price": "$49,840"
        }
    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const latestOrders = {
    header: [
        "customer id",
        "borrower",
        "loan amount",
        "close date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            user: "james bond",
            date: "17 Feb 2022",
            price: "$303,900",
            status: "processing"
        },
        {
            id: "#OD1713",
            user: "karl malone",
            date: "27 Jan 2022",
            price: "$245,050",
            status: "conditions"
        },
        {
            id: "#OD1612",
            user: "ryan smith",
            date: "1 Feb 2022",
            price: "$483,001",
            status: "conditions"
        },
        {
            id: "#OD1712",
            user: "dwayne wayde",
            date: "1 Jan 2022",
            price: "$246,720",
            status: "funded"
        },
        {
            id: "#OD1513",
            user: "jeff bezos",
            date: "27 Dec 2021",
            price: "$238,190",
            status: "funded"
        }
    ]
}

const orderStatus = {
    "processing": "primary",
    "conditions": "warning",
    "funded": "success",
    "lost": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)

const Dashboard = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <h2 className="page-header">Admin Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>top Loan originators</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={topCustomers.head}
                                renderHead={(item, index) => renderCusomerHead(item, index)}
                                bodyData={topCustomers.body}
                                renderBody={(item, index) => renderCusomerBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card__header">
                            <h3>current accounts</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
