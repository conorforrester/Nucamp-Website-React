import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderDirectoryItem({campsite}) {
    return (
        <Card>
            <Link to={`/directory/${campsite.id}`}>
                <CardImg width="100%" src={baseUrl + campsite.image} alt={campsite.name} />
                <CardImgOverlay>
                    <CardTitle>{campsite.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Directory(props) {
    //now getting campsites array out of object called campsites, hence "campsites.campsites"
    const directory = props.campsites.campsites.map(campsite => {
        return (
            <div key={campsite.id} className = "col-md-5 m-1">
                <RenderDirectoryItem campsite={campsite} />
            </div>
        );
    });

    //check to see if campsites object is loading, then display loading component
    if (props.campsites.isLoading) {
        return (
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    //check to see if campsites object is NOT loading, then display error message
    if (props.campsites.errMess) {
        return (
            <div className="container">
                <div className="row"> 
                    <div className="col">
                        <h4>{props.campsites.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    } 

    return (
        <div className="container">
            <div className="row">
                <div classNAme="col">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Directory
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;